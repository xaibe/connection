import { CoursesService } from 'src/courses/courses.service';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { Lecture } from './entities/lecture.entity';
export declare class LecturesService {
    private readonly lectureRepository;
    private readonly coursesService;
    constructor(lectureRepository: Repository<Lecture>, coursesService: CoursesService);
    create(data: CreateLectureDto, user: any): Promise<{
        title: string;
        slug: string;
        description: string;
        video_url: string;
        course: import("../courses/entities/course.entity").Course;
    } & Lecture>;
    findByName(name: any): Promise<Lecture>;
    getById(id: any): Promise<Lecture>;
    findAll(): Promise<Lecture[]>;
}
