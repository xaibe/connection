import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(req: any, createCourseDto: CreateCourseDto): Promise<{
        title: string;
        slug: string;
        description: string;
        user: any[];
    } & import("./entities/course.entity").Course>;
    Join(req: any, CourseId: string): Promise<import("./entities/course.entity").Course>;
    findAll(): Promise<import("./entities/course.entity").Course[]>;
    findOne(id: string): Promise<import("./entities/course.entity").Course>;
    remove(req: any, id: string): Promise<import("typeorm").DeleteResult>;
}
