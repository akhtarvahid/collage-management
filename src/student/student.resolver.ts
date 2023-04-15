import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.schema';

@Resolver()
export class StudentResolver {
  @Inject() studentService: StudentService;

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('mobile') mobile: string,
    @Args('email') email: string,
    @Args('studentId') studentId: string,
  ) {
    return this.studentService.create(
      firstName,
      lastName,
      mobile,
      email,
      studentId,
    );
  }
}
