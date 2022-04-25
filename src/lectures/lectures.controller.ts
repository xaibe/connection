import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/users/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { LecturesService } from './lectures.service';
@ApiTags('letures') //to show on the swagger about which api belongs to which module
@Controller('lectures')
@ApiBearerAuth() //used for swagger to get bearer auth to recognize user
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Roles(Role.Teacher)
  @UseGuards(RolesGuard)
  @Post('/createLectures')
  async create(@Request() req, @Body() createLectureDto: CreateLectureDto) {
    return await this.lecturesService.create(createLectureDto, req.user);
  }

  @Get('/getalllectures')
  async findAll() {
    return await this.lecturesService.findAll();
  }

  @Get('/GetSingleLectureById/:id')
  async findOne(@Param('id') id: string) {
    return await this.lecturesService.getById(+id);
  }
}
