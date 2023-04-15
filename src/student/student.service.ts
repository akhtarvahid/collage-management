import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  create(
    firstName,
    lastName,
    mobile,
    email,
    studentId,
  ): Promise<StudentEntity> {
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
      mobile,
      email,
      studentId,
    });

    return this.studentRepository.save(student);
  }
}
