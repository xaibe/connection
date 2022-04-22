import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordsService } from 'src/passwords/passwords.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from './role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private configService: ConfigService,
    private passwordsService: PasswordsService,
  ) {}

  async create(data): Promise<User> {
    console.log('user', data);

    if (data.password != null || data.password != undefined) {
      data.password = await this.passwordsService.hashPassword(data.password);
    }
    return this.userRepository.save(data);
  }

  async getwithRole(role: Role): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { roles: role },
    });
    return user;
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    if (user) {
      return user;
    }
  }

  async getById(input): Promise<User> {
    const user = await this.userRepository.findOne({
      where: input,
    });
    if (!user) {
      throw new NotFoundException();
    } else {
      return user;
    }
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find({
      //include: { applications: true },
    });
  }

  async updatePassword(email, password) {
    const validateUser = await this.getByEmail(email);
    if (validateUser) {
      const comparePassword = this.passwordsService.comparePassword(
        validateUser.password,
        password,
      );
    }
    const hash = await this.passwordsService.hashPassword(password);
    const data = { password: hash };
    const id = validateUser.id;
    const update = await this.userRepository.update(id, data);
    if (update) {
      return { message: 'password updated successfully', update };
    } else {
      throw new BadRequestException('unable to update password');
    }
  }

  async validateUser(email: string, pass: string) {
    try {
      const user1 = await this.userRepository.findOne({
        where: { email: email },
      });

      if (!user1) {
        throw new UnauthorizedException('Email/password incorrect');
      }
      const isMatch = await this.passwordsService.comparePassword(
        pass,
        user1.password,
      );
      if (!isMatch) {
        throw new UnauthorizedException('Email/password incorrect');
      }
      const { password, ...user } = user1;
      return user;
    } catch (ex) {
      throw ex;
    }
  }
}
