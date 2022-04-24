import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
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
    getById(id: any): Promise<Course>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCourseDto: UpdateCourseDto): string;
    remove(id: number): string;
}
