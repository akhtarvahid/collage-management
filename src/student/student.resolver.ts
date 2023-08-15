import { Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from './student.service';
import {
  CreateStudentInput,
  StudentType,
  UpdateStudentInput,
} from './student.schema';
import { CourseService } from 'src/course/course.service';
import { StudentEntity } from './student.entity';

@Resolver((of) => StudentType)
export class StudentResolver {
  @Inject() studentService: StudentService;
  @Inject() courseService: CourseService;

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

  @ResolveField()
  async course(@Parent() student: StudentEntity) {
    const result = await this.courseService.getStudentCourse(student.id);
    return result;
  }
}
