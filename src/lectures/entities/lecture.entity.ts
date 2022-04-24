import { Course } from 'src/courses/entities/course.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('lectures')
@Unique(['title'])
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  video_url: string;

  @ManyToOne(() => Course, (course) => course.lectures)
  course: Course;
}
