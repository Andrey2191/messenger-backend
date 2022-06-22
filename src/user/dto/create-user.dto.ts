import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: '123456qwerty', description: 'password' })
  readonly password: string;
}
