import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  mobile: string;

  @Field()
  email: string;

  @Field()
  studentId: string;
}
