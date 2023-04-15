import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  findAll(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  findOne(id: string): Promise<StudentEntity> {
    return this.studentRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<string> {
    const found = await this.studentRepository.findOneBy({ id });
    this.studentRepository.delete({
      id,
    });

    return `Student ${found.firstName.toUpperCase()} ${found.lastName.toUpperCase()} Successfully deleted`;
  }

  create(createStudentInput: CreateStudentInput): Promise<StudentEntity> {
    const student = this.studentRepository.create({
      id: uuid(),
      ...createStudentInput,
    });

    return this.studentRepository.save(student);
  }
}
