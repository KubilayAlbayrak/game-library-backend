import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async createUser(createUserRequest: CreateUserDTO) {
    const newUser = await this.userRepository.create(createUserRequest);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
