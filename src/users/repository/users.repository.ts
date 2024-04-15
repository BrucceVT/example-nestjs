import { Injectable } from "@nestjs/common"
import { User } from "../schemas/user.schema";
import { UserDto } from "../dto/user.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

// Este patrón se utiliza para abstraer la lógica de acceso a datos, de modo que el servicio no necesita 
// saber cómo se almacenan y recuperan los datos. Esto hace que el código sea más modular, 
// más fácil de mantener y de probar.


//  Abstrae la lógica de acceso a datos, facilitando la modularidad, mantenimiento y pruebas del código.

//@Injectable()
//export class UsersRepository { // sin entity
export class UsersRepository extends Repository<User> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {
        super(
          userRepository.target,
          userRepository.manager,
          userRepository.queryRunner,
        );
      }
    async store(userDto: UserDto): Promise<User> {
        const user = this.create(userDto);
        return this.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.find();
    }

    async findById(id: number): Promise<User | null> {
        return this.findOneBy({ id: id });
    }

    async updateOne(id: number, userDto: UserDto): Promise<void> {
        const user = this.create(userDto);
        user.id = id;
        await this.save(user);
    }

    async destroy(id: number): Promise<void> {
        await this.delete(id);
    }

    // private users: User[] = [];

    // create(userDto: UserDto): User {
    //     const newUser = new User(userDto);
    //     this.users.push(newUser);
    //     return newUser;
    // }

    // findAll(): User[] {
    //     return this.users;
    // }

    // findOne(id: number): User {
    //     return this.users.find(user => user.id === id);
    // }

    // update(id: number, userDto: UserDto): User {
    //     const userIndex = this.users.findIndex(user => user.id === id);
    //     if (userIndex > -1) {
    //         this.users[userIndex] = new User(userDto);
    //         return this.users[userIndex];
    //     }
    //     return null;
    // }

    // delete(id: number): User {
    //     const userIndex = this.users.findIndex(user => user.id === id);
    //     if (userIndex > -1) {
    //         const deletedUser = this.users.splice(userIndex, 1);
    //         return deletedUser[0];
    //     }
    //     return null;
    // }
}