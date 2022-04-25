import { CreateLectureDto } from './dto/create-lecture.dto';
import { LecturesService } from './lectures.service';
export declare class LecturesController {
    private readonly lecturesService;
    constructor(lecturesService: LecturesService);
    create(req: any, createLectureDto: CreateLectureDto): Promise<{
        title: string;
        slug: string;
        description: string;
        video_url: string;
        course: import("../courses/entities/course.entity").Course;
    } & import("./entities/lecture.entity").Lecture>;
    findAll(): Promise<import("./entities/lecture.entity").Lecture[]>;
    findOne(id: string): Promise<import("./entities/lecture.entity").Lecture>;
}
