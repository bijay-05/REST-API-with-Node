# REST-API-with-Node

In this project, we will create a REST API to perform CRUD operations on a Postgresql database. The API will perform actions like creating, updating, deleting and reading different todos available in the database.

## Directory Structure
`REST-API-with-Node`
|-src

| \t |-index.js

|    |-middlewares
|    |   |-notFound.js
|    |   |-error.js
|    |-routes
|    |   |-todoRoutes.js
|    |-controllers
|    |   |-todoControllers.js
|    |-models
|    |   |-todoModels.js
|    |-services
|    |   |-todoService.js

- routes consist of different end points for request
- controllers are responsible for handling the request-response cycle
- services are reponsible for handling the business logic
- models deal with data in the database

The functions in models are called in services and similarly, functions in one directory are imported in scripts just above its directory, in upward fashion as laid out in above hierarchy.