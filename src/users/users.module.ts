import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordsService } from 'src/passwords/passwords.service';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, PasswordsService, ConfigService],
  exports: [UsersService],
})
export class UsersModule {}
