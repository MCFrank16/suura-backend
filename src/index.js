import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const graphiql = process.env.NODE_ENV !== 'production';
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql,
  }),
);

// eslint-disable-next-line no-console
const server = app.listen(4000, () => console.log('Server running at port 4000'));

export default server;
