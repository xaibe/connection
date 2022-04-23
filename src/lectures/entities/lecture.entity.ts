import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lectures')
export class Lecture {
  @PrimaryGeneratedColumn()
  LID: number;

  @Column()
  CID: number;

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
