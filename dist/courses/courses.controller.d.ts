import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(req: any, createCourseDto: CreateCourseDto): Promise<{
        title: string;
        slug: string;
        description: string;
        userId: any;
    } & import("./entities/course.entity").Course>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCourseDto: UpdateCourseDto): string;
    remove(id: string): string;
}
