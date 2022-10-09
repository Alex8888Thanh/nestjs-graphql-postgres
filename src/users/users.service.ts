import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userRepository.save(createUserInput);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this.userRepository.update(
      { id: updateUserInput.id },
      { ...updateUserInput },
    );
    return this.findOne(updateUserInput.id);
  }

  async remove(id: string) {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`ID "${id}" not found!`);
    }

    return id;
  }
}
