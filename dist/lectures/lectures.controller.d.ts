import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { LecturesService } from './lectures.service';
export declare class LecturesController {
    private readonly lecturesService;
    constructor(lecturesService: LecturesService);
    create(createLectureDto: CreateLectureDto): Promise<{
        title: string;
        slug: string;
        description: string;
        video_url: string;
        course: import("../courses/entities/course.entity").Course;
    } & import("./entities/lecture.entity").Lecture>;
    findAll(): Promise<import("./entities/lecture.entity").Lecture[]>;
    findOne(id: string): string;
    update(id: string, updateLectureDto: UpdateLectureDto): string;
    remove(id: string): string;
}
