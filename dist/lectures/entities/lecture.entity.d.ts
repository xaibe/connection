import { Course } from 'src/courses/entities/course.entity';
export declare class Lecture {
    LID: number;
    CID: number;
    title: string;
    slug: string;
    description: string;
    video_url: string;
    course: Course;
}
