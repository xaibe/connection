import { ConfigService } from '@nestjs/config';
export declare class PasswordsService {
    private configService;
    constructor(configService: ConfigService);
    hashPassword(pass: any): Promise<string>;
    comparePassword(hash: string, userPassword: string): Promise<any>;
}
