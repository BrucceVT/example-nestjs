import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './repository/users.repository';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';

//Este archivo define el servicio de usuario, que maneja la lógica de negocio para los usuarios.

@Injectable()
export class UsersService {
    constructor(
        // @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository,
    ) { }
    // constructor(private readonly usersRepository: UsersRepository) { } // sin entity
    //private users = []; //sin dto y repository

    // create(user) {
    // create(userDto: UserDto) { // sin entity
    async create(userDto: UserDto): Promise<User> {
        // this.users.push(user); //sin dto y repository
        //return this.usersRepository.create(userDto);// sin entity
        try {
            return this.usersRepository.store(userDto);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // async findAll() {
    async findAll(): Promise<User[]> {
        // return this.users; //sin dto y repository
        // return this.usersRepository.findAll(); //sin entity
        try {
            const users = await this.usersRepository.findAll();
            if (users?.length === 0) {
                throw new Error('No record found.');
            }
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findById(id: number): Promise<User> {
        // async findOne(id: number) {
        // return this.users.find(user => user.id === id); //sin dto y repository
        //return this.usersRepository.findOne(id); // sin entity
        try {
            const user = await this.usersRepository.findById(id);
            if (!user) {
                throw new Error('User not found.');
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // update(id: number, updatedUser) {
    async update(id: number, userDto: UserDto): Promise<void> {

        // const userIndex = this.users.findIndex(user => user.id === id);
        // if (userIndex > -1) {
        //     this.users[userIndex] = updatedUser;
        //     return this.users[userIndex];
        // }
        // return null; //sin dto y repository
        // return this.usersRepository.update(id, userDto); // sin entity
        try {
            await this.findById(id);
            return await this.usersRepository.updateOne(id, userDto);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async delete(id: number) {
        // const userIndex = this.users.findIndex(user => user.id === id);
        // if (userIndex > -1) {
        //     const deletedUser = this.users.splice(userIndex, 1);
        //     return deletedUser[0];
        // }
        // return null; //sin dto y repository
        // return this.usersRepository.delete(id); // sin entity
        try {
            return await this.usersRepository.destroy(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
