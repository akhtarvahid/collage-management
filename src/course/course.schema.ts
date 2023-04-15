import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

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
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  courseStatus: string;
}
