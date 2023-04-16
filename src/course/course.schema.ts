import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';
import { StudentType } from 'src/student/student.schema';

@ObjectType('Course')
export class CourseType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  courseStatus: string;

  @Field((type) => [StudentType])
  students: string[];
}

@InputType()
export class CreateCourseInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @MinLength(1)
  @Field()
  courseStatus: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}

@InputType()
export class AssignStudentsToCourseInput {
  @IsUUID()
  @Field((type) => ID)
  courseId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
