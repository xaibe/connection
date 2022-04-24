import { CoursesService } from 'src/courses/courses.service';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { Lecture } from './entities/lecture.entity';
export declare class LecturesService {
    private readonly lectureRepository;
    private readonly coursesService;
    constructor(lectureRepository: Repository<Lecture>, coursesService: CoursesService);
    create(createLectureDto: CreateLectureDto): Promise<{
        title: string;
        slug: string;
        description: string;
        video_url: string;
        course: import("../courses/entities/course.entity").Course;
    } & Lecture>;
    findbyname(name: any): Promise<Lecture>;
    findAll(): Promise<Lecture[]>;
    findOne(id: number): string;
    update(id: number, updateLectureDto: UpdateLectureDto): string;
    remove(id: number): string;
}
