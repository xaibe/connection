import { Course } from 'src/courses/entities/course.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Role } from '../role.enum';
export declare class User {
    id: number;
    course: Course[];
    profile: Profile;
    first_name: string;
    last_name: string;
    email: string;
    roles: Role;
    password: string;
}
