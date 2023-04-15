import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobile: number;

  @Column()
  email: string;

  @Column()
  studentId: string;
}
