import { AuthenticationError, ValidationError, SchemaError } from 'apollo-server-express';
import { createUser, getUserById, getUsers, emailExists, usernameExists } from '../../services';
import Util from '../../utils';

export const mutationUser = async ({ username, email, password, name, }, { user }) => {
  if (user && ['superadmin', 'admin'].includes(user.role)) {
    const temp = {};
    temp.role = (user.role === 'superadmin') ? 'admin' : 'provider';
    if (!Util.validatePassword(password)) {
      throw new ValidationError('try strong password with number, alphabetic and symbol');
    }
    if (email) {
      if (await emailExists(email)) {
        throw new ValidationError('email already exist');
      }
      temp.email = email;
    }
    if (await usernameExists(username)) {
      throw new ValidationError('username already exist');
    }
    temp.password = Util.hashPassword(password);
    temp.username = username;
    temp.name = name;
    temp.createdBy = user._id;
    try {
      const person = await createUser(temp);
      return Util.parseObject(person);
    } catch (err) {
      throw new SchemaError(err.message);
    }
  }
  throw new AuthenticationError('Not Authorized');
};

export const queryUser = async ({ id }, { user }) => {
  if (user) {
    try {
      const person = await getUserById(id) || {};
      return Util.parseObject(person);
    } catch (err) {
      throw new SyntaxError('Invalid user id');
    }
  }
  throw new AuthenticationError('Not Authorized!');
};

export const users = async ({ limit, skip }, { user }) => {
  if (user) {
    const person = await getUsers(limit, skip) || [];
    person.map(element => Util.parseObject(element));
    return person;
  }
  throw new AuthenticationError('Not Authorized!');
};
