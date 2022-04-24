import { ConfigService } from '@nestjs/config';
import { PasswordsService } from 'src/passwords/passwords.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './role.enum';
export declare class UsersService {
    private readonly userRepository;
    private configService;
    private passwordsService;
    constructor(userRepository: Repository<User>, configService: ConfigService, passwordsService: PasswordsService);
    create(data: any): Promise<User>;
    getwithRole(role: Role): Promise<User>;
    getByEmail(email: string): Promise<User>;
    getById(id: any): Promise<User>;
    getAll(): Promise<User[]>;
    updatePassword(email: any, password: any): Promise<{
        message: string;
        update: import("typeorm").UpdateResult;
    }>;
    validateUser(email: string, pass: string): Promise<{
        id: number;
        profile: import("../profiles/entities/profile.entity").Profile;
        first_name: string;
        last_name: string;
        email: string;
        roles: Role;
    }>;
}
