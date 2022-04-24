import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/users/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { LecturesService } from './lectures.service';
@ApiTags('letures')
@Controller('lectures')
@ApiBearerAuth()
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Roles(Role.Teacher)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lecturesService.create(createLectureDto);
  }

  @Get()
  findAll() {
    return this.lecturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectureDto: UpdateLectureDto) {
    return this.lecturesService.update(+id, updateLectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturesService.remove(+id);
  }
}
