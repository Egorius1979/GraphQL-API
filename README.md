# GraphQL API

This application is a handy graphql API for six microservices that allows you to create an intuitive query and get a response expanded across all nesting fields in one single response.
**Simple, convenient, visual.**

## Quick start

1. Clone repo with microservises [here](https://github.com/rolling-scopes-school/node-graphql-service)

- the installation instructions are inside

2. Clone this repo

- `npm install` or you can use [yarn](https://yarnpkg.com/getting-started/install)

3. The application is using MongoDB as a database. Feel free to choose any solution for it, however it's highle recommended to use Docker and the official image for it.

[Docker MongoDB](https://hub.docker.com/_/mongo)

4. Сonfigure the connection of microservices to the Database by making the necessary changes in the .env files of microservices

5. Start microservices from the microservices repository: **`npm run run:all:dev`** or **`npm run run:all:prod`**

6. Start **_GraphQL API_** app from its repository: **`npm run dev`** or **`npm run prod`**

## How to use

when the microservices connect to the database and the graphql server is also running, follow this link

```
http://localhost:4000/graphql
```

You can execute all **Queries** (_get-request_) without authorization and authentication. All **Mutations** (_create, update, delete and add_) can only be done by authorized users.
To do this, you need to register (**Mutation** => **_register_**), and then log in and get a token (**Query** => **_jwt_**) in the `Documentation` tab on the left.
In the middle lower part of the screen, click the **Headers** tab, then click `+ New header`, select **_Authorization_** in the field `key header` and write word _**Bearer**_ with a space at the end in the `value` field and put the value of the previously received **_jwt-token_** there.

_Now you can use all the other mutations from the list._

**Good luck!**
