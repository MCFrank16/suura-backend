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
mongod --bind_ip_all --dbpath /usr/local/var/mongodb
```

## APPLICATION SET UP
- ### install dependencies
```
npm install
```
- ### start the application
```
npm start // production
npm run dev // development
```
- ### testing
```
npm test
```


## License & copyright
Copyright (c) MCFrank16, Software developer