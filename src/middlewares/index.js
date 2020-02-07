import jwt from 'jsonwebtoken';

/**
 * @description All middlewares between resolvers
 */
export default class Middleware {
  /**
   * @static
   * @memberof Middleware
   * @description verify if the token of the user was generated using our private key
   * @param {string} token
   * @returns {object} role and id
   */
  static verifyUser(token) {
    try {
      return jwt.verify(token, process.env.PRIVATE_KEY);
    } catch (err) {
      return null;
    }
  }

  /**
   * sign a token to the user
   * @param {object} user
   * @returns {string} token
   */
  static signUser(user) {
    return jwt.sign(user, process.env.PRIVATE_KEY);
  }
}
