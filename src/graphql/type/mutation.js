export default `
type Mutation {
  session(username: String!, password: String!): Session
  logout: Logout
  logoutAll: Logout
  user(username: String!, password: String!, email: String, name: String!): User
  updateAvatar(url: String!): Message
  updateBanner(url: String!): Message
  updateProfile(name: String, phonenumber: String, bio: String, address: String): User
  updateUsername(username: String!): Message
  updateEmail(email: String!): Message
  updatePassword(password: String!): Message
}
`;
