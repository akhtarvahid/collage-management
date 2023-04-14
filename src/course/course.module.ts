import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
