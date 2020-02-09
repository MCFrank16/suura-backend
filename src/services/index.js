import { SchemaError } from 'apollo-server-express';
import { Session, User, IP } from '../mongo/models';
import Util from '../utils';

/**
 * @class Service
 * @description every direct operations with the database are defined in this class
 */
export default class Service {
  static async deleteSession(token, user = '') {
    const $or = (user) ? [{ token, user }] : [{ token }];
    return (await Session.deleteMany({ $or })).deletedCount;
  }

  static async createSession({ token, user }) {
    try {
      return Session.create({ token, user });
    } catch (err) {
      throw new SchemaError(err.message);
    }
  }

  static async getUserByProfile(username) {
    const $or = [{ username }, { email: username }];
    return User.findOne({ $or });
  }

  static async getUserById(id) {
    return Util.parseObject(await User.findById(id));
  }

  static async postIp(reqIP) {
    try {
      await IP.create({ ip: reqIP });
    } catch (err) {
      throw new SchemaError(err.message);
    }
  }

  static async getToken(token) {
    return Session.findOne({ token });
  }

  static async getUsers(filter) {
    return User.find(filter);
  }

  static async createUser(user) {
    return User.create(user);
  }
}
