import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role.enum';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Course, (Course) => Course.user)
  course: Course[];

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ default: Role.Student })
  roles: Role;

  @Column()
  password: string;
}
