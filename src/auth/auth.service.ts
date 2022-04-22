/* eslint-disable prefer-const */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordsService } from 'src/passwords/passwords.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly passwordsService: PasswordsService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email, pass);
    if (user) {
      const newUser = this.loginUser(user);
      return newUser;
    } else {
      throw new UnauthorizedException('Inavalid User Name or password');
    }
  }

  async updatePassword(email: string, password: string) {
    const update = await this.usersService.updatePassword(email, password);
    if (update) {
      return update;
    }
  }

  async loginUser(user: any) {
    const access_token = await this.generateToken(user);
    return {
      access_token: access_token,
      user,
      roles: user.roles,
    };
  }

  async generateToken(user: any) {
    console.log('user account');
    const payload = {
      id: user.id,
      email: user.emailAddress,
      roles: user.roles,
    };

    console.log('payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
