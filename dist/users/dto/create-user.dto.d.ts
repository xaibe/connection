import { Role } from '../role.enum';
export declare class CreateUserDto {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    roles: Role;
}
