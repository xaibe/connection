import { JwtService } from '@nestjs/jwt';
import { PasswordsService } from 'src/passwords/passwords.service';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    private readonly passwordsService;
    constructor(jwtService: JwtService, usersService: UsersService, passwordsService: PasswordsService);
    validateUser(email: string, pass: string): Promise<any>;
    updatePassword(data: any): Promise<{
        message: string;
        update: import("typeorm").UpdateResult;
    }>;
    loginUser(user: any): Promise<{
        access_token: {
            access_token: string;
        };
        user: any;
        roles: any;
    }>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
}
