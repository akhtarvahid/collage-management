import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

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
}
