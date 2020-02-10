export default `
type Query {
  user(id: String!): User
  users(limit: Int, skip: Int): [User]
}
`;
