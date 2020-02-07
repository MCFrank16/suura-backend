/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import connection, { connected, error, termination } from './mongo';
import { typeDefs, resolvers } from './graphql';

const playground = process.env.NODE_ENV !== 'production';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  introspection: true,
  tracing: false,
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

export default server.listen(4000, () => console.log(connected('Server running at port 4000')));

process.on('SIGINT', () => {
  connection.close(err => {
    if (err) {
      console.log(error(err.message));
    } else {
      console.log(termination('database is disconnected due to application termination'));
    }
  });
});
