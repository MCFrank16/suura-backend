import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import connection, { connected, error, termination } from './mongo';
import { typeDefs, resolvers } from './graphql';
import Middleware from './middlewares';

const { NODE_ENV, PORT } = process.env;
const playground = NODE_ENV !== 'production';
const app = express();

app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Middleware.authorize);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  introspection: true,
  tracing: false,
  path: '/suura',
  cors: true,
  context: ({ req }) => req,
});

server.applyMiddleware({ app, path: '/suura' });

const listen = app.listen(PORT || 4000, () => console.log(connected(`http://localhost:${PORT || 4000}/suura`)));
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
