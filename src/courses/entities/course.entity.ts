import { Lecture } from 'src/lectures/entities/lecture.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
@Unique(['title'])
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  created!: Date;

  @ManyToMany(() => User)
  @JoinTable()
  user: User[];

  @OneToMany(() => Lecture, (lecture) => lecture.course)
  lectures: Lecture[];
}
