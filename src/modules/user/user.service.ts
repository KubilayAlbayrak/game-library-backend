import { Injectable, NotFoundException } from '@nestjs/common';
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
  public async findUserById(userId: string) {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new NotFoundException(`User with the id ${userId} was not found`);
    }
    return user;
  }
  public async findUserByEmail(userEmail: string) {
    const user = await this.userRepository.findOne(userEmail);
    if (!user) {
      throw new NotFoundException(
        `User with the id ${userEmail} was not found`,
      );
    }
    return user;
  }
}
