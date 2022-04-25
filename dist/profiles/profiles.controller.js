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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const profiles_service_1 = require("./profiles.service");
let ProfilesController = class ProfilesController {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    async create(req, createProfileDto) {
        console.log('request', req.user);
        return await this.profilesService.create(createProfileDto, req.user);
    }
    findOne(req) {
        return this.profilesService.getById(req.user.id);
    }
};
__decorate([
    (0, common_1.Post)('createProfile'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findMyProfile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "findOne", null);
ProfilesController = __decorate([
    (0, swagger_1.ApiTags)('profiles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
exports.ProfilesController = ProfilesController;
//# sourceMappingURL=profiles.controller.js.map