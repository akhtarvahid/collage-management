import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

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
  create(name, startDate, endDate, courseStatus): Promise<CourseEntity> {
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
