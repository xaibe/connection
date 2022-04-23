"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const courses_service_1 = require("../courses/courses.service");
const course_entity_1 = require("../courses/entities/course.entity");
const lecture_entity_1 = require("../lectures/entities/lecture.entity");
const lectures_service_1 = require("../lectures/lectures.service");
const passwords_service_1 = require("../passwords/passwords.service");
const profile_entity_1 = require("../profiles/entities/profile.entity");
const profiles_service_1 = require("../profiles/profiles.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
const jwt_strategy_1 = require("./Strategies/jwt.strategy");
const local_strategy_1 = require("./Strategies/local.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, course_entity_1.Course, lecture_entity_1.Lecture, profile_entity_1.Profile]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '5d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            auth_service_1.AuthService,
            users_service_1.UsersService,
            passwords_service_1.PasswordsService,
            courses_service_1.CoursesService,
            lectures_service_1.LecturesService,
            profiles_service_1.ProfilesService,
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map