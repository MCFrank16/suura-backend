/* eslint-disable no-console */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import path from 'path';
import file from 'express-fileupload';
import connection, { connected, error, termination } from './mongo';
import { typeDefs, resolvers } from './graphql';

const { NODE_ENV, PORT } = process.env;
const playground = NODE_ENV !== 'production';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(file({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, '../temp'),
}));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  introspection: true,
  tracing: false,
  path: '/suura',
  cors: true,
});

server.applyMiddleware({
  app,
  path: '/suura',
  onHealthCheck: () => new Promise((resolve, reject) => {
    if (connection.readyState > 0) {
      resolve();
    } else {
      reject();
    }
  }),
});

const listen = app.listen(PORT || 4000, () => console.log(connected(`Server running at port ${PORT || 4000}`)));
export default listen;

process.on('SIGINT', () => {
  listen.close(err => {
    if (err) {
      console.log(error(err.message));
    } else {
      console.log(termination('server is disconnected due to application termination'));
    }
  });
  connection.close(err => {
    if (err) {
      console.log(error(err.message));
    } else {
      console.log(termination('database is disconnected due to application termination'));
    }
  });
});
