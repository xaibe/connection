import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PasswordsService {
  constructor(private configService: ConfigService) {}

  async hashPassword(pass) {
    try {
      console.log('entered password hashing');
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(pass, saltOrRounds);

      if (hash) {
        return hash;
      }
    } catch (err) {
      throw err;
    }
  }

  async comparePassword(hash: string, userPassword: string): Promise<any> {
    try {
      // const isMatch = await bcrypt.compare(password, hash);
      const result = await bcrypt.compare(userPassword, hash);
      return result;
    } catch (ex) {
      throw ex;
    }
  }
}
