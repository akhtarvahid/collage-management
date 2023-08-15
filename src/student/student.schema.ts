import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsPhoneNumber } from 'class-validator';
import { CourseEntity } from 'src/course/course.entity';
import { CourseType } from 'src/course/course.schema';

@ObjectType('Student')
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @IsPhoneNumber()
  @Field()
  mobile: number;

  @Field()
  email: string;

  @Field()
  studentId: string;

  @Field((type) => CourseType, { nullable: true })
  course: CourseType;
}

@InputType()
export class CreateStudentInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  mobile: number;

  @Field()
  email: string;

  @Field()
  studentId: string;
}

@InputType()
export class UpdateStudentInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  mobile?: number;

  @Field({ nullable: true })
  email?: string;

  @Field()
  studentId?: string;
}
