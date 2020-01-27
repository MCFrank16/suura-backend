import { GraphQLObjectType } from 'graphql';
import { ObjectId } from 'mongodb';

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: ObjectId,
    username: String,
    role: String,
    creadetAt: Date,
    updateAt: Date,
  }
});

export default { User };
