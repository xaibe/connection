"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LecturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const courses_service_1 = require("../courses/courses.service");
const typeorm_2 = require("typeorm");
const lecture_entity_1 = require("./entities/lecture.entity");
let LecturesService = class LecturesService {
    constructor(lectureRepository, coursesService) {
        this.lectureRepository = lectureRepository;
        this.coursesService = coursesService;
    }
    async create(createLectureDto) {
        const courseId = createLectureDto.CID;
        console.log('course id', courseId);
        const course = await this.coursesService.getById(courseId);
        if (!course) {
            throw new common_1.BadRequestException('Course with id does not exists');
        }
        else {
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
    findOne(id) {
        return `This action returns a #${id} lecture`;
    }
    update(id, updateLectureDto) {
        return `This action updates a #${id} lecture`;
    }
    remove(id) {
        return `This action removes a #${id} lecture`;
    }
};
LecturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lecture_entity_1.Lecture)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        courses_service_1.CoursesService])
], LecturesService);
exports.LecturesService = LecturesService;
//# sourceMappingURL=lectures.service.js.map