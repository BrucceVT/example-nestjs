import { UserDto } from "../dto/user.dto";

// Los esquemas definen la estructura de los datos en la aplicación. Puedes pensar en ellos como una
// plantilla que tus datos deben seguir. En el contexto de NestJS y MongoDB, los esquemas se utilizan
// para definir la estructura de los documentos en tu base de datos. Los esquemas ayudan a garantizar
// que los datos se almacenen de manera consistente y predecible.

// Definen la estructura de los datos en la aplicación, garantizando consistencia y previsibilidad en el almacenamiento de datos.

export class User {
    id: number;
    name: string;
    email: string;
    // Agrega aquí cualquier otro campo que necesites.
  
    constructor(dto: UserDto) {
      this.id = dto.id;
      this.name = dto.name;
      this.email = dto.email;
      // Inicializa aquí cualquier otro campo que necesites.
    }
  }
  