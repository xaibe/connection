import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { Course } from 'src/courses/entities/course.entity';
import { PasswordsService } from 'src/passwords/passwords.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Lecture } from './entities/lecture.entity';
import { LecturesController } from './lectures.controller';
import { LecturesService } from './lectures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User, Lecture])],
  controllers: [LecturesController],
  providers: [LecturesService, CoursesService, UsersService, PasswordsService],
})
export class LecturesModule {}
