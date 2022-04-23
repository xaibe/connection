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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passwords_service_1 = require("../passwords/passwords.service");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(jwtService, usersService, passwordsService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.passwordsService = passwordsService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.validateUser(email, pass);
        if (user) {
            const newUser = this.loginUser(user);
            return newUser;
        }
        else {
            throw new common_1.UnauthorizedException('Inavalid User Name or password');
        }
    }
    async updatePassword(email, password) {
        const update = await this.usersService.updatePassword(email, password);
        if (update) {
            return update;
        }
    }
    async loginUser(user) {
        const access_token = await this.generateToken(user);
        return {
            access_token: access_token,
            user,
            roles: user.roles,
        };
    }
    async generateToken(user) {
        console.log('user account');
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles,
        };
        console.log('payload', payload);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        passwords_service_1.PasswordsService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map