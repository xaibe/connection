import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class LecturesService {
  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
    private readonly coursesService: CoursesService,
  ) {}

  async create(data: CreateLectureDto, user) {
    const courseId = data.CID;
    console.log('data', data);

    const course = await this.coursesService.getById(courseId);
    if (!course) {
      throw new BadRequestException('Course with id does not exists');
    } else {
      let check = false;
      const users = course.user;
      users.forEach(async function (element) {
        if (element.id === user.id) {
          console.log('entered id');
          check = true;
        }
      });
      if (check) {
        const lecture = await this.findByName(data.title);
        if (lecture) {
          throw new BadRequestException(
            'A lecture with this title already exists',
          );
        } else {
          const obj = {
            title: data.title,
            slug: data.slug,
            description: data.description,
            video_url: data.video_url,
            course: course,
          };
          const result = await this.lectureRepository.save(obj);
          console.log('result', result);
          return result;
        }
      } else {
        throw new UnauthorizedException(
          'You are Unauthorized to add lectures to some one else course',
        );
      }
    }
  }

  async findByName(name) {
    return await this.lectureRepository.findOne({
      where: { title: name },
    });
  }

  //to find lecture by lecture id
  async getById(id) {
    const lecture = await this.lectureRepository.findOne({
      where: { id: id },
      relations: ['course'],
    });
    if (!lecture) {
      throw new NotFoundException('lecture with this id not found');
    } else {
      return lecture;
    }
  }

  //to find all existing lectures
  async findAll() {
    return await this.lectureRepository.find({
      relations: ['course'],
    });
  }
}
