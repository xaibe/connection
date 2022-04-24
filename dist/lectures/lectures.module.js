"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LecturesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const courses_service_1 = require("../courses/courses.service");
const course_entity_1 = require("../courses/entities/course.entity");
const passwords_service_1 = require("../passwords/passwords.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const lecture_entity_1 = require("./entities/lecture.entity");
const lectures_controller_1 = require("./lectures.controller");
const lectures_service_1 = require("./lectures.service");
let LecturesModule = class LecturesModule {
};
LecturesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course, user_entity_1.User, lecture_entity_1.Lecture])],
        controllers: [lectures_controller_1.LecturesController],
        providers: [lectures_service_1.LecturesService, courses_service_1.CoursesService, users_service_1.UsersService, passwords_service_1.PasswordsService],
    })
], LecturesModule);
exports.LecturesModule = LecturesModule;
//# sourceMappingURL=lectures.module.js.map