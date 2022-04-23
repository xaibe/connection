import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(req: any, createProfileDto: CreateProfileDto): Promise<{
        biography: string;
        jobTitle: string;
        personalWebsite: string;
        photoUrl: string;
        userId: any;
    } & import("./entities/profile.entity").Profile>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProfileDto: UpdateProfileDto): string;
    remove(id: string): string;
}
