import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Esta entidad representa una tabla de usuarios en tu base de datos. Cada columna en la tabla se define con el decorador @Column().

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  // Agrega aquí cualquier otro campo que necesites.
}
