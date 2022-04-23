import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsNotEmpty()
  photoUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  jobTitle: string;

  @ApiProperty()
  @IsNotEmpty()
  personalWebsite: string;

  @ApiProperty()
  @IsNotEmpty()
  biography: string;
}
