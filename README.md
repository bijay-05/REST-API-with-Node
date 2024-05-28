# REST-API-with-Node

In this project, we will create a REST API to perform CRUD operations on a Postgresql database. The API will perform actions like creating, updating, deleting and reading different todos available in the database.

## Directory Structure
`REST-API-with-Node`

├── controllers

│   └── todoControllers.js

├── db

│   ├── knexfile.js

│   └── knex.js

├── index.js

├── LICENSE

├── middlewares
│   ├── errorHandler.js
│   └── notFound.js
├── models
│   └── todoModels.js
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── index.js
│   └── todoRoutes.js
└── services
    └── todoService.js

- routes consist of different end points for request
- controllers are responsible for handling the request-response cycle
- services are reponsible for handling the business logic
- models deal with data in the database
- middlewares for handling errors if the routes or URLs donot match 

The functions in models are called in services and similarly, functions in one directory are imported in scripts just above its directory, in upward fashion as laid out in above hierarchy.