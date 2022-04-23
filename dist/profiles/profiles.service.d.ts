import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
export declare class ProfilesService {
    private readonly profileRepository;
    constructor(profileRepository: Repository<Profile>);
    create(createProfileDto: CreateProfileDto, user: any): Promise<{
        biography: string;
        jobTitle: string;
        personalWebsite: string;
        photoUrl: string;
        userId: any;
    } & Profile>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProfileDto: UpdateProfileDto): string;
    remove(id: number): string;
}
