"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
require("reflect-metadata");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./auth/guards/roles.guard");
const courses_module_1 = require("./courses/courses.module");
const course_entity_1 = require("./courses/entities/course.entity");
const lecture_entity_1 = require("./lectures/entities/lecture.entity");
const lectures_module_1 = require("./lectures/lectures.module");
const passwords_module_1 = require("./passwords/passwords.module");
const profile_entity_1 = require("./profiles/entities/profile.entity");
const profiles_module_1 = require("./profiles/profiles.module");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('TYPEORM_HOST'),
                    port: +configService.get('TYPEORM_PORT'),
                    username: configService.get('TYPEORM_USERNAME'),
                    password: configService.get('TYPEORM_PASSWORD'),
                    database: configService.get('TYPEORM_DATABASE'),
                    entities: [user_entity_1.User, profile_entity_1.Profile, lecture_entity_1.Lecture, course_entity_1.Course],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            courses_module_1.CoursesModule,
            lectures_module_1.LecturesModule,
            profiles_module_1.ProfilesModule,
            users_module_1.UsersModule,
            passwords_module_1.PasswordsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map