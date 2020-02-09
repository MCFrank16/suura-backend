import jwt from 'jsonwebtoken';
import Service from '../services';

/**
 * @class Helper
 * @description All helpers(usually finalizers function) between resolvers
 */
export default class Helper {
  static async verifyUser(session) {
    try {
      const { token } = await Service.getToken(session);
      if (!token) {
        throw new Error();
      }
      return jwt.verify(token, process.env.PRIVATE_KEY);
    } catch (err) {
      return null;
    }
  }

  static async signUser(user) {
    const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY);
    return Service.createSession({ token, user: user.id });
  }
}
