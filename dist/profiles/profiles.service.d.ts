import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
export declare class ProfilesService {
    private readonly profileRepository;
    private readonly usersService;
    constructor(profileRepository: Repository<Profile>, usersService: UsersService);
    create(createProfileDto: CreateProfileDto, user: any): Promise<{
        biography: string;
        jobTitle: string;
        personalWebsite: string;
        photoUrl: string;
        user: import("../users/entities/user.entity").User;
    } & Profile>;
    getById(id: any): Promise<Profile>;
}
