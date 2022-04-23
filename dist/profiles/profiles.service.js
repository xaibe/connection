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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./entities/profile.entity");
let ProfilesService = class ProfilesService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async create(createProfileDto, user) {
        console.log(user);
        const obj = {
            biography: createProfileDto.biography,
            jobTitle: createProfileDto.jobTitle,
            personalWebsite: createProfileDto.personalWebsite,
            photoUrl: createProfileDto.photoUrl,
            userId: user.id,
        };
        const result = await this.profileRepository.save(obj);
        console.log('result', result);
        return result;
    }
    findAll() {
        return `This action returns all profiles`;
    }
    findOne(id) {
        return `This action returns a #${id} profile`;
    }
    update(id, updateProfileDto) {
        return `This action updates a #${id} profile`;
    }
    remove(id) {
        return `This action removes a #${id} profile`;
    }
};
ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfilesService);
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map