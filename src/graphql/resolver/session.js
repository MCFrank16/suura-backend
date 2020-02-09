import { AuthenticationError } from 'apollo-server-express';
import { deleteSessions, deleteSession, getUserByProfile } from '../../services';
import Middleware from '../../helpers';
import Util from '../../utils';

export const mutationSession = async ({ username, password }, { token }) => {
  const user = await getUserByProfile(username);
  if (user && Util.comparePassword(password, user.password)) {
    if (token) {
      await deleteSession(token);
    }
    return Util.parseObject(Middleware.signUser(user));
  }
  throw new AuthenticationError('incorrect username or password');
};

export const logout = async ({ token }) => {
  if (token) {
    const count = await deleteSession(token);
    return { count };
  }
  throw new AuthenticationError('Not Authorized!');
};

export const logoutAll = async ({ user }) => {
  if (user) {
    const count = await deleteSessions(user._id);
    return { count };
  }
  throw new AuthenticationError('Not Authorized!');
};
