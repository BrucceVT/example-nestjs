import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', // usa el tipo de base de datos que estés utilizando
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [User], // asegúrate de que tu entidad de usuario esté incluida aquí
    synchronize: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
