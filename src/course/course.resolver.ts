import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  AssignStudentsToCourseInput,
  CourseType,
  CreateCourseInput,
} from './course.schema';
import { Repository } from 'typeorm';
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';

@Resolver((of) => CourseType)
export class CourseResolver {
  constructor(private courseService: CourseService) {}

  @Query((_returns) => [CourseType])
  courses() {
    return this.courseService.findAll();
  }

  @Query((returns) => CourseType)
  course(@Args('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Mutation((returns) => CourseType)
  createCourse(
    @Args('createCourseInput') createCourseInput: CreateCourseInput,
  ) {
    return this.courseService.create(createCourseInput);
  }

  @Mutation((returns) => CourseType)
  async allotStudentsToCourse(
    @Args('assignStudentsToCourseInput')
    assignStudentsToCourseInput: AssignStudentsToCourseInput,
  ) {
    const { courseId, studentIds } = assignStudentsToCourseInput;
    return this.courseService.assignStudentsToCourse(courseId, studentIds);
  }
}
