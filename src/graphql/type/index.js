import { gql } from 'apollo-server';

export default gql`
type Session {
  _id: ID!
  token: String!
  createdAt: String!
  updatedAt: String!
  user: ID!
}
type User {
  _id: ID!
  username: String
  role: String
  createdAt: String!
  updatedAt: String!
  email: String!
  address: String
  avatar: String
  password: String
  banner: String
  createdBy: ID!
}

type Mutation {
  session(email: String, password: String): Session
}

type Query {
  user(id: ID!): User
  users(limit: Int, skip: Int): [User]
}
`;
