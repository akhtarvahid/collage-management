import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseType } from './course.schema';
import { Repository } from 'typeorm';
import { CourseService } from './course.service';

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
    @Args('name') name: string,
    @Args('startDate') sDate: string,
    @Args('endDate') eDate: string,
    @Args('courseStatus') courseStatus: string,
  ) {
    return this.courseService.create(name, sDate, eDate, courseStatus);
  }
}
