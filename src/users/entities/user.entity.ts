import { Course } from 'src/courses/entities/course.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../role.enum';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Course)
  @JoinTable()
  course: Course[];

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

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
