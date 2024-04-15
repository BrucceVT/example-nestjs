# Proyecto NestJS de Ejemplo

Este es mi proyecto NestJS. En este documento, te mostraré cómo configurar y ejecutar el proyecto.

## Requisitos

- Node.js
- Docker
- NestJS CLI

## Configuración de Docker para MySQL

1. **Instala Docker**: Si aún no lo has hecho, necesitarás instalar Docker en tu máquina. Puedes descargarlo desde la página oficial de Docker.

2. **Descarga la imagen de MySQL**: Una vez que tienes Docker instalado, puedes descargar la imagen de MySQL usando el siguiente comando en la terminal:
```
docker pull mysql:8.0
```

3. **Crea un contenedor de Docker para MySQL**: Ahora puedes crear un contenedor de Docker para tu base de datos MySQL con el siguiente comando:
```
docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=test -e MYSQL_DATABASE=test -e MYSQL_USER=test -e MYSQL_PASSWORD=test -p 3306:3306 -d mysql:8.0
```

4. **Conéctate a tu base de datos MySQL**: Ahora puedes conectarte a tu base de datos MySQL usando el siguiente comando:
```
docker exec -it test-mysql mysql -utest -p
```

Puede que te de error el comando anterior si el contendor ya esta corriendo.

Ahora deberías tener una base de datos MySQL local corriendo en un contenedor de Docker. Recuerda que siempre puedes detener tu contenedor de Docker con `docker stop test-mysql` y volver a iniciarlo con `docker start test-mysql`.


 
## Configuración del proyecto

1. **Instala las dependencias**: Navega a la carpeta del proyecto en tu terminal y ejecuta el siguiente comando para instalar las dependencias del proyecto:

Con npm:
```
npm install
```
Con yarn:
```
yarn
```

2. **Inicia el proyecto**: Puedes iniciar el proyecto con el siguiente comando:
Con npm:
```
npm run start
```
Con yarn:
```
yarn start
```

## Descripción del proyecto
 Aquí tienes hay descripción detallada de estos conceptos y cómo se relacionan entre sí en el flujo de trabajo de una aplicación NestJS:

**DTO (Data Transfer Object)**: Un DTO es un objeto que se utiliza para encapsular datos y enviarlos de un sistema a otro. En el caso de una API REST, los DTOs se utilizan comúnmente para estructurar los datos que se envían en las solicitudes y respuestas HTTP. Los DTOs ayudan a validar que los datos recibidos son correctos antes de que tu aplicación los procese.

**Entity**: En el contexto de NestJS y TypeORM, una entidad es una clase que se mapea a una tabla en tu base de datos. Cada instancia de una entidad representa una fila en esa tabla. Las entidades son útiles cuando estás trabajando con una base de datos, ya que te permiten interactuar con tus tablas de base de datos como si fueran objetos en tu código.

**Repository**: El patrón de repositorio se utiliza para abstraer la lógica de acceso a datos, de modo que el servicio no necesita saber cómo se almacenan y recuperan los datos. Esto hace que el código sea más modular, más fácil de mantener y de probar.

**Schema**: Los esquemas definen la estructura de los datos en tu aplicación. Puedes pensar en ellos como una plantilla que tus datos deben seguir. En el contexto de NestJS y MongoDB, los esquemas se utilizan para definir la estructura de los documentos en tu base de datos. Los esquemas ayudan a garantizar que los datos se almacenen de manera consistente y predecible.

## Flujo de trabajo

Aquí te explico cómo se relacionan estos conceptos en el flujo de trabajo de una aplicación NestJS:

    1. Cuando un cliente (como una aplicación web o móvil) quiere crear, actualizar o consultar un usuario, nos envía los datos del usuario en un formato específico. Este formato es lo que llamamos DTO.
    2. En nuestro servicio, tomamos este DTO y lo validamos. Si el DTO es válido, lo convertimos en una entidad.
    3. Luego, pasamos esta entidad a nuestro repositorio. El repositorio sabe cómo almacenar esta entidad en nuestra base de datos.
    4. Si estamos recuperando datos, el proceso es similar pero en sentido inverso. El repositorio recupera la entidad de la base de datos y la pasa al servicio. El servicio luego convierte esta entidad en un DTO para enviarlo al cliente.
