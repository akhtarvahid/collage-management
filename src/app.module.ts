import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course/course.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/collage',
      synchronize: true,
      useUnifiedTopology: true,
      port: 27072,
      entities: [CourseEntity],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      driver: ApolloDriver,
    }),
    CourseModule,
  ],
})
export class AppModule {}
