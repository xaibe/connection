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
exports.PasswordsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
let PasswordsService = class PasswordsService {
    constructor(configService) {
        this.configService = configService;
    }
    async hashPassword(pass) {
        try {
            console.log('entered password hashing');
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(pass, saltOrRounds);
            if (hash) {
                return hash;
            }
        }
        catch (err) {
            throw err;
        }
    }
    async comparePassword(hash, userPassword) {
        try {
            const result = await bcrypt.compare(userPassword, hash);
            return result;
        }
        catch (ex) {
            throw ex;
        }
    }
};
PasswordsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PasswordsService);
exports.PasswordsService = PasswordsService;
//# sourceMappingURL=passwords.service.js.map