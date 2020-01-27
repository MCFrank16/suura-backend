import { GraphQLObjectType } from 'graphql';
import Type from '../type';
import Resolver from '../resolver';

const { User } = Type;
const { findUserById, findUserByMany } = Resolver;

export default {
  userById: new GraphQLObjectType({
    name: 'userById',
    fields: {
      user: 
    }
  })
};
