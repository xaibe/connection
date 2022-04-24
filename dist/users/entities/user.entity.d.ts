import { Profile } from 'src/profiles/entities/profile.entity';
import { Role } from '../role.enum';
export declare class User {
    id: number;
    profile: Profile;
    first_name: string;
    last_name: string;
    email: string;
    roles: Role;
    password: string;
}
