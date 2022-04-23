import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdatePasswordDto } from 'src/passwords/dto/update-password.dto';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async Login(@Body() createAuthDto: LoginUserDto) {
    return await this.authService.validateUser(
      createAuthDto.email,
      createAuthDto.password,
    );
  }

  @Public()
  @Patch('update-Password')
  async updatePassword(@Body() UpdatePasswordDto: UpdatePasswordDto) {
    const { email, Password } = UpdatePasswordDto;
    return await this.authService.updatePassword(email, Password);
  }
}
