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
}

type Mutation {
  session(username: String!, password: String!): Session
  logout(token: String, user: String): Int
}

type Query {
  user(id: String!): User
  users(limit: Int, skip: Int): [User]
}
`;
