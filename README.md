# suura-backend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/MCFrank16/suura-backend.svg?branch=master)](https://travis-ci.org/MCFrank16/suura-backend)
[![Coverage Status](https://coveralls.io/repos/github/MCFrank16/suura-backend/badge.svg?branch=master)](https://coveralls.io/github/MCFrank16/suura-backend?branch=master)

this is the backend of the project entitled as SUURA

## DATABASE SET UP
**The project is using Mongodb**
### installation using brew
- #### tap the mongodb
```
brew tap mongodb/brew
```
- #### install the tapped version
```
brew install mongodb-community@4.2
```
- #### run mongo server
```
// For UNIX

- yarn start:db
- npm run start:db

// You will have to open another terminal to keep this connection alive
```

### using remote mongodb server
- Create account on MongoDB Atlas and follow the set-ups
- copy the database URL and paste it in `.env` by following `.env.sample`

## APPLICATION SET UP
- ### install dependencies
```
npm install
yarn
```
- ### environment
Edit your `.env` by following the example from `.env.example`

- ### start the application
```
// Production

npm start
yarn start

// Development

npm run start:dev
yarn start:dev
```
- ### testing
It is recommended to use `Local MongoDB` for speed sake during test,
**first start your local mongodb**,  `yarn start:db` 

and then, to run test simply do:
```
yarn test
npm test
```
**NOTE that:** Test should use different database with `development` or `production`, follow `.env.sample`

### GraphQL Playground
- open `localhost:4000/suura` in your browser. activated only during development.
- **NOTE that:** `Uploading files` uses `Normal REST API` specifications, you call `POST:/upload`

### Tools
- GraphQL
- MongoDB
- Apollo server Express
- Mongoose
- Express

## License & copyright
License MIT
Copyright © 2020 Frank Mutabazi