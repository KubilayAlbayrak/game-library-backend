import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    return await this.userService.findUserById(id);
  }

  @Post()
  public async createUser(@Body() createUserRequest: CreateUserDTO) {
    const resp = await this.userService.createUser(createUserRequest);
    return resp;
  }
}
