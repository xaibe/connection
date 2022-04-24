import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { Repository } from 'typeorm';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class LecturesService {
  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
    private readonly coursesService: CoursesService,
  ) {}

  async create(createLectureDto: CreateLectureDto) {
    const courseId = createLectureDto.CID;
    console.log('course id', courseId);
    const course = await this.coursesService.getById(courseId);
    if (!course) {
      throw new BadRequestException('Course with id does not exists');
    } else {
      const obj = {
        title: createLectureDto.title,
        slug: createLectureDto.slug,
        description: createLectureDto.description,
        video_url: createLectureDto.video_url,
        course: course,
      };
      const result = await this.lectureRepository.save(obj);
      console.log('result', result);

      return result;
    }
  }

  async findbyname(name) {
    return await this.lectureRepository.findOne({
      where: { title: name },
    });
  }

  async findAll() {
    return await this.lectureRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} lecture`;
  }

  update(id: number, updateLectureDto: UpdateLectureDto) {
    return `This action updates a #${id} lecture`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecture`;
  }
}
