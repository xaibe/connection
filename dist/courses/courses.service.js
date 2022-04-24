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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("./entities/course.entity");
let CoursesService = class CoursesService {
    constructor(courseRepository, usersService) {
        this.courseRepository = courseRepository;
        this.usersService = usersService;
    }
    async create(createCourseDto, user) {
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
            throw new common_1.NotFoundException('course with this id not found');
        }
        else {
            return course;
        }
    }
    findAll() {
        return `This action returns all courses`;
    }
    findOne(id) {
        return `This action returns a #${id} course`;
    }
    update(id, updateCourseDto) {
        return `This action updates a #${id} course`;
    }
    remove(id) {
        return `This action removes a #${id} course`;
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map