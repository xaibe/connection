import { Lecture } from 'src/lectures/entities/lecture.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

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

  @ManyToOne(() => User, (user) => user.course, { onDelete: 'CASCADE' })
  user: User;

  @RelationId((course: Course) => course.user) // you need to specify target relation
  userId: number;

  @OneToMany(() => Lecture, (lecture) => lecture.course)
  lectures: Lecture[];
}
