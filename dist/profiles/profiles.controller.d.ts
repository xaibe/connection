import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(req: any, createProfileDto: CreateProfileDto): Promise<{
        biography: string;
        jobTitle: string;
        personalWebsite: string;
        photoUrl: string;
        user: import("../users/entities/user.entity").User;
    } & import("./entities/profile.entity").Profile>;
    findOne(req: any): Promise<import("./entities/profile.entity").Profile>;
}
