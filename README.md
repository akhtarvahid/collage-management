

## Create connection
```
TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/collage',
      synchronize: true,
      useUnifiedTopology: true,
      port: 27072,
      entities: [CourseEntity],
    }),
```

then run your docker to start mongodb server

 ```bash
 docker run --mongodb_name -p 27072:27017 -d mongo
 ```


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
