import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import {
  CreateStudentInput,
  StudentType,
  UpdateStudentInput,
} from './student.schema';

@Resolver((of) => StudentType)
export class StudentResolver {
  @Inject() studentService: StudentService;

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.findAll();
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Mutation((returns) => String)
  deleteStudent(@Args('id') id: string) {
    return this.studentService.delete(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Mutation((returns) => StudentType)
  updateStudent(@Args('updateStudent') updateStudentInput: UpdateStudentInput) {
    return this.studentService.update(updateStudentInput);
  }
}
