# Animalking - Módulo de Empleados

Este proyecto es un módulo de empleados para la aplicación web veterinaria "Animalking". Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los empleados.

## Configuración del entorno

Para el correcto funcionamiento de la aplicación en el backend, debes seguir los siguientes pasos:

1. **Instalar Node.js**: Debes tener instalado Node.js en tu sistema.

2. **Crear el archivo .env**: Dentro del proyecto, crea el archivo .env con las siguientes variables:

    ```env
    DB_HOST=nombreDelHost
    DB_PORT=numeroPuertoBaseDatos
    DB_USER=nombreUsuario
    DB_PASSWORD=contraseña
    DB_DATABASE=nombreBaseDatos
    SERVER_PORT=numeroPuertoServidor
    ```

3. **Instalar las dependencias**: Ejecuta los siguientes comandos en la consola:

    ```bash
    npm init -y
    npm install express mysql2 dotenv cors sequelize
    npm install nodemon --save-dev
    npm start
    ```

## Creación de la base de datos

Debes crear las tablas `empleados`, `personas` y `roles` con sus campos correspondientes:

- **Tabla: empleados**

    | Columna             | Tipo        |
    |---------------------|-------------|
    | id                  | int AI PK   |
    | persona_documento   | varchar(20) |
    | profesion           | varchar(255)|
    | rol_id              | int         |
    | usuario             | varchar(20) |
    | contrasena          | varchar(255)|
    | createdAt           | timestamp   |
    | updatedAt           | timestamp   |

- **Tabla: personas**

    | Columna                  | Tipo        |
    |--------------------------|-------------|
    | id                       | int AI PK   |
    | nombres                  | varchar(255)|
    | apellidos                | varchar(255)|
    | documento_identificacion | varchar(20) |
    | fecha_nacimiento         | date        |
    | correo_electronico       | varchar(255)|
    | celular                  | varchar(20) |
    | direccion                | varchar(255)|
    | departamento             | varchar(100)|
    | ciudad                   | varchar(100)|
    | createdAt                | timestamp   |
    | updatedAt                | timestamp   |

- **Tabla: roles**

    | Columna    | Tipo        |
    |------------|-------------|
    | id         | int AI PK   |
    | nombre     | varchar(100)|
    | createdAt  | timestamp   |
    | updatedAt  | timestamp   |

## Realizar peticiones HTTP

Para realizar peticiones HTTP, debes crear un archivo `request.http` e instalar en VSCode la extensión REST Client.
