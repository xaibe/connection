import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
export declare class LecturesService {
    create(createLectureDto: CreateLectureDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLectureDto: UpdateLectureDto): string;
    remove(id: number): string;
}
