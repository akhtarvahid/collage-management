import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput, StudentType } from './student.schema';

@Resolver()
export class StudentResolver {
  @Inject() studentService: StudentService;

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }
}
