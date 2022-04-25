import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    private readonly usersService: UsersService,
  ) {}
  async create(createProfileDto: CreateProfileDto, user) {
    console.log(user);
    const users = await this.usersService.getById(user.id);
    const obj = {
      biography: createProfileDto.biography,
      jobTitle: createProfileDto.jobTitle,
      personalWebsite: createProfileDto.personalWebsite,
      photoUrl: createProfileDto.photoUrl,
      user: users,
    };
    const result = await this.profileRepository.save(obj);
    console.log('result', result);

    return result;
  }

  //to find profile by profile id
  async getById(id) {
    const profile = await this.profileRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
    if (!profile) {
      throw new NotFoundException('profile with this id not found');
    } else {
      return profile;
    }
  }
}
