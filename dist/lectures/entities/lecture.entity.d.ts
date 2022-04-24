import { Course } from 'src/courses/entities/course.entity';
export declare class Lecture {
    id: number;
    title: string;
    slug: string;
    description: string;
    video_url: string;
    course: Course;
}
