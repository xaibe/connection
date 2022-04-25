import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private readonly courseRepository;
    private readonly usersService;
    constructor(courseRepository: Repository<Course>, usersService: UsersService);
    create(createCourseDto: CreateCourseDto, user: any): Promise<{
        title: string;
        slug: string;
        description: string;
        user: any[];
    } & Course>;
    joinCourse(user: any, CID: any): Promise<Course>;
    findbyname(name: any): Promise<Course>;
    getById(id: any): Promise<Course>;
    findAll(): Promise<Course[]>;
    remove(user: any, id: number): Promise<import("typeorm").DeleteResult>;
}
