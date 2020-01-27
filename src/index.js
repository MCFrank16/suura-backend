/* eslint-disable no-console */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connection, { connected, error, termination } from './mongo';
import schema from './graphql';

const playground = process.env.NODE_ENV !== 'production';

const app = express();

const server = new ApolloServer({
  schema,
  playground,
  introspection: true,
  tracing: true,
  path: '/suura',
});

server.applyMiddleware({
  app,
  path: '/suura',
  cors: true,
  onHealthCheck: () => new Promise((resolve, reject) => {
    if (connection.readyState > 0) {
      resolve();
    } else {
      reject();
    }
  }),
});

const listen = app.listen(4000, () => console.log(connected('Server running at port 4000')));
export default listen;

process.on('SIGINT', () => {
  connection.close(err => {
    if (err) {
      console.log(error(err.message));
    } else {
      console.log(termination('database is disconnected due to application termination'));
    }
  });
  listen.close(err => {
    if (err) {
      console.log(error(err.message));
    } else {
      console.log(termination('server is disconnected due to application termination'));
    }
  });
});
