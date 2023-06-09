import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course/course.entity';
import { join } from 'path';
import { StudentModule } from './student/student.module';
import { StudentEntity } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/collage',
      synchronize: true,
      useUnifiedTopology: true,
      port: 27072,
      entities: [CourseEntity, StudentEntity],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      driver: ApolloDriver,
    }),
    CourseModule,
    StudentModule,
  ],
})
export class AppModule {}
