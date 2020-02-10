export default `
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
type Message {
  message: String
}
`;
