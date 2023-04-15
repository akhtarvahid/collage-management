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
    const { name, startDate, endDate, courseStatus } = createCourseInput;
    const course = this.courseRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      courseStatus,
    });

    return this.courseRepository.save(course);
  }
}
