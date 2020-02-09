import { gql } from 'apollo-server-express';

const Type = `
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
type Logout {
  count: Int
}

type File {
  url: String
}
`;

const Mutation = `
type Mutation {
  session(username: String!, password: String!): Session
  logout: Logout
  logoutAll: Logout
  user(username: String!, password: String!, email: String, name: String!): User
  upload(file: Upload!): File
}
`;

const Query = `
type Query {
  user(id: String!): User
  users(limit: Int, skip: Int): [User]
}
`;

export default gql`
${Type}

${Mutation}

${Query}
`;
