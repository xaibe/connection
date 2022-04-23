import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { LecturesService } from './lectures.service';
export declare class LecturesController {
    private readonly lecturesService;
    constructor(lecturesService: LecturesService);
    create(createLectureDto: CreateLectureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLectureDto: UpdateLectureDto): string;
    remove(id: string): string;
}
