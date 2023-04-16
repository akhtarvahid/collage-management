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
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';
import { StudentService } from 'src/student/student.service';

@Resolver((of) => CourseType)
export class CourseResolver {
  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
  ) {}

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

  @ResolveField()
  async students(@Parent() course: CourseEntity) {
    return this.studentService.getManyStudents(course.students);
  }
}
