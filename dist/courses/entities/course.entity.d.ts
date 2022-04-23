import { Lecture } from 'src/lectures/entities/lecture.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    created: Date;
    user: User;
    userId: number;
    lectures: Lecture[];
}
