import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateCourseInput } from './course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) {}

  findAll(): Promise<CourseEntity[]> {
    return this.courseRepository.find({});
  }
  findOne(id): Promise<CourseEntity> {
    return this.courseRepository.findOneBy({ id });
  }
  create(createCourseInput: CreateCourseInput): Promise<CourseEntity> {
    const { name, startDate, endDate, courseStatus, students } =
      createCourseInput;
    const course = this.courseRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      courseStatus,
      students,
    });

    return this.courseRepository.save(course);
  }

  async assignStudentsToCourse(
    courseId: string,
    studentIds: string[],
  ): Promise<CourseEntity> {
    const course = await this.courseRepository.findOneBy({ id: courseId });
    course.students = [...course.students, ...studentIds];
    return this.courseRepository.save(course);
  }
}
