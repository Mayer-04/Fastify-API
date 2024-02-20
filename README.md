# Fastify-API

API REST creada con Fastify, TypeScript y PostgreSQL, diseñada para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos PostgreSQL.

## Características

- Patrón arquitectónico MVC (Modelo, Vista, Controlador).
- Clases e inyección de depencias.
- Validaciones sin ninguna librería.
- Utilizando [pg](https://node-postgres.com/) para hacer consultar nativas a la base de datos PostgreSQL.

## Requisitos Previos

- [Node.js](https://nodejs.org/en) (v16.0.0 o superior)
- [pnpm](https://pnpm.io/es/) (Puedes instalarlo globalmente con `npm install -g pnpm` o habilitando Corepack con `corepack enable pnpm` desde la v16.13 de Node.js)
- [Docker](https://www.docker.com) (Se requiere Docker para ejecutar los servicios deseados, base de datos PostgreSQL)

## Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Mayer-04/Fastify-API.git
   ```

2. Instalar las dependencias:

    ```bash
   pnpm install
   ```

3. Clonar el archivo **.env.template** a **.env** para configurar las variables de entorno. Credenciales de la base de datos y la clave secreta para JWT.
4. Configurar el **docker-compose.yml** y ejecutar:

   ```bash
   docker-compose up -d
   ```

5. Ejecutar `pnpm run dev` para levantar el proyecto en modo desarrollo.
6. Accede a la API desde:

    ```bash
   http://localhost:5000/api/products
   ```

## Uso

La API expone los siguientes endpoints para realizar operaciones CRUD:

- `GET /api/products`: Obtener todos los productos.
- `GET /api/products/:id`: Obtener un producto por su ID.
- `POST /api/products`: Crear un nuevo producto.
- `PUT /api/products/:id`: Actualizar un producto existente.
- `DELETE /api/products/:id`: Eliminar un producto por su ID.