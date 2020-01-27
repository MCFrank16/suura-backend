import { SchemaComposer } from 'graphql-compose';
import Query from './query';
import Mutation from './mutation';

const schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields({
  ...Query,
});

schemaComposer.Mutation.addFields({
  ...Mutation,
});

export default schemaComposer.buildSchema();

