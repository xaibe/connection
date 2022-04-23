import { UpdatePasswordDto } from 'src/passwords/dto/update-password.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    Login(createAuthDto: LoginUserDto): Promise<any>;
    updatePassword(UpdatePasswordDto: UpdatePasswordDto): Promise<{
        message: string;
        update: import("typeorm").UpdateResult;
    }>;
}
