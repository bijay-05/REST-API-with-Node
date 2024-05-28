# REST-API-with-Node

In this project, we will create a REST API to perform CRUD operations on a Postgresql database. The API will perform actions like creating, updating, deleting and reading different todos available in the database.

## Directory Structure
`REST-API-with-Node`
 * [LICENSE](./LICENSE)
 * [db](./db)
   * [knexfile.js](./db/knexfile.js)
   * [knex.js](./db/knex.js)
 * [models](./models)
   * [todoModels.js](./models/todoModels.js)
 * [services](./services)
   * [todoService.js](./services/todoService.js)
 * [controllers](./controllers)
   * [todoControllers.js](./controllers/todoControllers.js)
 * [nodemon.json](./nodemon.json)
 * [package-lock.json](./package-lock.json)
 * [package.json](./package.json)
 * [routes](./routes)
   * [todoRoutes.js](./routes/todoRoutes.js)
   * [index.js](./routes/index.js)
 * [index.js](./index.js)
 * [middlewares](./middlewares)
   * [notFound.js](./middlewares/notFound.js)
   * [errorHandler.js](./middlewares/errorHandler.js)
 * [README.md](./README.md)


- routes consist of different end points for request
- controllers are responsible for handling the request-response cycle
- services are reponsible for handling the business logic
- models deal with data in the database
- middlewares for handling errors if the routes or URLs donot match 

The functions in models are called in services and similarly, functions in one directory are imported in scripts just above its directory, in upward fashion as laid out in above hierarchy.