import { AuthenticationError, ValidationError, SchemaError } from 'apollo-server-express';
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
    const person = await Service.getUserById(id) || {};
    return Util.parseObject(person);
  }
  throw new AuthenticationError('Not Authorized!');
};

const logout = async ({ user }, req) => {
  try {
    if (user) {
      assert.deepEqual(user, req.user._id);
    }
    await Service.deleteSession(req.token, user);
  } catch (err) {
    throw new AuthenticationError('Not Authorized!');
  }
};

const mutationUser = async ({ username, email, password, name, }, { user }) => {
  if (user && ['superadmin', 'admin'].includes(user.role)) {
    const temp = {};
    temp.role = (user.role === 'superadmin') ? 'admin' : 'provider';
    if (!Util.validatePassword(password)) {
      throw new ValidationError('try strong password with number, alphabetic and symbol');
    }
    temp.password = Util.hashPassword(password);
    temp.username = username;
    temp.email = email;
    temp.name = name;
    temp.createdBy = user._id;
    try {
      const person = await Service.createUser(temp);
      return Util.parseObject(person);
    } catch (err) {
      throw new SchemaError(err.message);
    }
  }
  throw new AuthenticationError('Not Authorized');
};

export default { mutationSession, queryUser, logout, mutationUser };
