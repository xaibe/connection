import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly usersService: UsersService,
  ) {}

  //to create courses in the database by the teacher
  async create(createCourseDto: CreateCourseDto, user) {
    console.log(user);
    const users = await this.usersService.getById(user.id);

    const course = await this.findbyname(createCourseDto.title);
    if (course) {
      throw new BadRequestException('A course with this title already exists');
    } else {
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
  }

  //to join courses in the database by the student
  async joinCourse(user, CID) {
    const users = await this.usersService.getById(user.id);

    const course = await this.getById(CID);
    if (course) {
      course.user.push(users);
      console.log(course);
      const result = await this.courseRepository.save(course);
      console.log('result', result);

      return result;
    } else {
      throw new BadRequestException('A course with this ID Does Not exists');
    }
  }

  //to find course by name so a we can check at the time of creating new course
  async findbyname(name) {
    return await this.courseRepository.findOne({
      where: { title: name },
    });
  }

  //to find course by course id
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

  //to find all existing courses
  async findAll() {
    return await this.courseRepository.find({
      relations: ['user', 'lectures'],
    });
  }

  //to remove any course by the teacher only
  async remove(user, id: number) {
    const course = await this.courseRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
    if (course) {
      let check;
      const users = course.user;
      await users.forEach(function (element) {
        if (element.id === user.id) {
          console.log('user true');
        }
      });
      if (check) {
        const result = await this.courseRepository.delete({
          id,
        });
        if (!result) {
          throw new NotFoundException('unable to delete course');
        } else {
          return result;
        }
      } else {
        throw new UnauthorizedException(
          'You are not able to delete some one else course',
        );
      }
    }
  }
}
