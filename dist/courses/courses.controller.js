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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/guards/roles.guard");
const role_enum_1 = require("../users/role.enum");
const roles_decorator_1 = require("../users/roles.decorator");
const courses_service_1 = require("./courses.service");
const create_course_dto_1 = require("./dto/create-course.dto");
let CoursesController = class CoursesController {
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    create(req, createCourseDto) {
        console.log('req.user', req.user);
        return this.coursesService.create(createCourseDto, req.user);
    }
    Join(req, CourseId) {
        console.log('req.user', req.user);
        return this.coursesService.joinCourse(req.user, +CourseId);
    }
    async findAll() {
        return await this.coursesService.findAll();
    }
    async findOne(id) {
        return await this.coursesService.getById(+id);
    }
    async remove(req, id) {
        return await this.coursesService.remove(req.user, +id);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Teacher),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/Createcourse'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Student),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/joinCourse/:CourseId'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('CourseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "Join", null);
__decorate([
    (0, common_1.Get)('/getAllCourses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/getCourseById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Teacher),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/deleteCourse/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "remove", null);
CoursesController = __decorate([
    (0, swagger_1.ApiTags)('courses'),
    (0, common_1.Controller)('courses'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
exports.CoursesController = CoursesController;
//# sourceMappingURL=courses.controller.js.map