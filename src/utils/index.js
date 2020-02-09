import bcrypt from 'bcrypt';

/**
 * @class Util
 * @description utilities(validation) class
 */
export default class Util {
  static validateUserName(username) {
    return /^[A-Za-z_0-9]+$/.test(username);
  }

  static validatePassword(password) {
    return /[a-zA-Z]+/.test(password) && !/\s+/.test(password) && /[0-9]+/.test(password) && /[-!$%^&*()_+|~=``{}\\:";'<>?,./@]+/.test(password);
  }

  static validateName(name) {
    return /^[A-Za-z_0-9 ]+$/.test(name);
  }

  static validatePhoneNo(phone) {
    return /^07(3|2|8)\d{7}$/.test(phone);
  }

  static validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  static comparePassword(password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static parseObject(object) {
    if (object) {
      object.password && (object.password = undefined);
    }
    return object;
  }

  static getToken(req) {
    return (req.headers['x-access-token'] || req.headers.authorization || req.headers.Authorization);
  }
}
