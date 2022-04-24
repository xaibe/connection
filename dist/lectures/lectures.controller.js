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
exports.LecturesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/guards/roles.guard");
const role_enum_1 = require("../users/role.enum");
const roles_decorator_1 = require("../users/roles.decorator");
const create_lecture_dto_1 = require("./dto/create-lecture.dto");
const update_lecture_dto_1 = require("./dto/update-lecture.dto");
const lectures_service_1 = require("./lectures.service");
let LecturesController = class LecturesController {
    constructor(lecturesService) {
        this.lecturesService = lecturesService;
    }
    create(createLectureDto) {
        return this.lecturesService.create(createLectureDto);
    }
    findAll() {
        return this.lecturesService.findAll();
    }
    findOne(id) {
        return this.lecturesService.findOne(+id);
    }
    update(id, updateLectureDto) {
        return this.lecturesService.update(+id, updateLectureDto);
    }
    remove(id) {
        return this.lecturesService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Teacher),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lecture_dto_1.CreateLectureDto]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lecture_dto_1.UpdateLectureDto]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LecturesController.prototype, "remove", null);
LecturesController = __decorate([
    (0, swagger_1.ApiTags)('letures'),
    (0, common_1.Controller)('lectures'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [lectures_service_1.LecturesService])
], LecturesController);
exports.LecturesController = LecturesController;
//# sourceMappingURL=lectures.controller.js.map