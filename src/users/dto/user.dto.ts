
// Un DTO es un objeto que se utiliza para encapsular datos y enviarlos de un sistema a otro.
// En el caso de una API REST, los DTOs se utilizan comúnmente para estructurar los datos que
// se envían en las solicitudes y respuestas HTTP. Los DTOs ayudan a validar que los datos recibidos
// son correctos antes de que tu aplicación los procese.

// Encapsula datos para su transferencia entre sistemas, ayudando a validar la estructura de los datos.

export class UserDto {
    id: number;
    name: string;
    email: string;
    // Agrega aquí cualquier otro campo que necesites.
  }
  