import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly usersService: UsersService,
  ) {}
  async create(createCourseDto: CreateCourseDto, user) {
    console.log(user);
    const users = await this.usersService.getById(user.id);

    const obj = {
      title: createCourseDto.title,
      slug: createCourseDto.slug,
      description: createCourseDto.description,
      user: [],
    };
    obj.user = [users];
    const result = await this.courseRepository.save(obj);
    console.log('result', result);

    return result;
  }

  async getById(id) {
    const course = await this.courseRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
    if (!course) {
      throw new NotFoundException('course with this id not found');
    } else {
      return course;
    }
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
