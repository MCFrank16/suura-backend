import { gql } from 'apollo-server-express';

export default gql`
type Session {
  id: String
  token: String
  createdAt: String
  updatedAt: String
  user: String
}
type User {
  id: String
  username: String
  name: String
  role: String
  createdAt: String
  updatedAt: String
  email: String
  address: String
  avatar: String
  password: String
  banner: String
  createdBy: String
  phonenumber: String
  bio: String
}

type Mutation {
  session(username: String!, password: String!): Session
  logout(user: String): Int
  user(username: String!, password: String!, email: String, name: String!): User
}

type Query {
  user(id: String!): User
  users(limit: Int, skip: Int): [User]
}
`;
