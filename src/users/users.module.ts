import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repository/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

//Este archivo define el módulo de usuario, que incluye el controlador y el servicio de usuario.

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
