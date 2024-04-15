import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

//Este archivo define el controlador de usuario, que maneja las solicitudes HTTP para los usuarios.

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        // let users = this.usersService.findAll();
        // if (users.length >= 1) {
        //     return users
        // }
        // return "No hay datos"
        // return this.usersService.findAll(); // sin entity
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        // return this.usersService.findOne(id);
        return this.usersService.findById(id);
    }

    @Post()
    // create(@Body() user) {
    create(@Body() userDto: UserDto) {
        // return this.usersService.create(user); //sin dto y repository
        return this.usersService.create(userDto);
    }

    @Put(':id')
    // update(@Param('id') id: number, @Body() updatedUser) {
    update(@Param('id') id: number, @Body() userDto: UserDto) {
        // return this.usersService.update(id, updatedUser); //sin dto y repository
        return this.usersService.update(id, userDto);

    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.delete(id);
    }
}
