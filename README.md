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
yarn start:db
npm run start:db
```

### using remote mongodb server
- Create account on MongoDB Atlas and follow the set-ups
- copy the database URL and paste it in `.env` accordingly

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
It is recommended to use `Local MongoDB URL` speed sake during test
```
yarn test
npm test
```

### Tools
- GraphQL
- MongoDB
- Apollo server
- Mongoose
- Express

## License & copyright
License MIT
Copyright © 2020 Frank Mutabazi