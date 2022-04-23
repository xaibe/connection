import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  async create(createProfileDto: CreateProfileDto, user) {
    console.log(user);

    const obj = {
      biography: createProfileDto.biography,
      jobTitle: createProfileDto.jobTitle,
      personalWebsite: createProfileDto.personalWebsite,
      photoUrl: createProfileDto.photoUrl,
      userId: user.id,
    };
    const result = await this.profileRepository.save(obj);
    console.log('result', result);

    return result;
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
