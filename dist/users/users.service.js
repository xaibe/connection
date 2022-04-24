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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const passwords_service_1 = require("../passwords/passwords.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepository, configService, passwordsService) {
        this.userRepository = userRepository;
        this.configService = configService;
        this.passwordsService = passwordsService;
    }
    async create(data) {
        console.log('user', data);
        if (data.password != null || data.password != undefined) {
            data.password = await this.passwordsService.hashPassword(data.password);
        }
        return this.userRepository.save(data);
    }
    async getwithRole(role) {
        const user = await this.userRepository.findOne({
            where: { roles: role },
        });
        return user;
    }
    async getByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email: email },
        });
        if (user) {
            return user;
        }
    }
    async getById(id) {
        const user = await this.userRepository.findOne({
            where: { id: id },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        else {
            return user;
        }
    }
    async getAll() {
        return await this.userRepository.find({});
    }
    async updatePassword(email, password) {
        const validateUser = await this.getByEmail(email);
        if (validateUser) {
            const comparePassword = this.passwordsService.comparePassword(validateUser.password, password);
        }
        const hash = await this.passwordsService.hashPassword(password);
        const data = { password: hash };
        const id = validateUser.id;
        const update = await this.userRepository.update(id, data);
        if (update) {
            return { message: 'password updated successfully', update };
        }
        else {
            throw new common_1.BadRequestException('unable to update password');
        }
    }
    async validateUser(email, pass) {
        try {
            const user1 = await this.userRepository.findOne({
                where: { email: email },
            });
            console.log('user1', user1);
            if (!user1) {
                throw new common_1.UnauthorizedException('Email/password incorrect');
            }
            const isMatch = await this.passwordsService.comparePassword(user1.password, pass);
            if (!isMatch) {
                throw new common_1.UnauthorizedException('Email/password incorrect');
            }
            const { password } = user1, user = __rest(user1, ["password"]);
            return user;
        }
        catch (ex) {
            throw ex;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService,
        passwords_service_1.PasswordsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map