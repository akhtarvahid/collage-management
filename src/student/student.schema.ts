import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsPhoneNumber } from 'class-validator';

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
