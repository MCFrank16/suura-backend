import { AuthenticationError } from 'apollo-server-express';
import assert from 'assert';
import Service from '../../services';
import Middleware from '../../helpers';
import Util from '../../utils';

const mutationSession = async ({ username, password }, { token }) => {
  const user = await Service.getUserByProfile(username);
  if (user && Util.comparePassword(password, user.password)) {
    if (token) {
      await Service.deleteSession(token);
    }
    return Util.parseObject(Middleware.signUser(user));
  }
  throw new AuthenticationError('incorrect username or password');
};

const queryUser = async ({ id }, { user }) => {
  if (user) {
    const person = await Service.user(id) || {};
    return Util.parseObject(person);
  }
  throw new AuthenticationError('Not Authorized!');
};

const logout = async ({ token, user }, req) => {
  try {
    if (token) {
      assert.deepEqual(token, req.token);
    }
    if (user) {
      assert.deepEqual(user, req.user);
    }
    await Service.deleteSession(token, user);
  } catch (err) {
    throw new AuthenticationError('Not Authorized!');
  }
};

export default { mutationSession, queryUser, logout };
