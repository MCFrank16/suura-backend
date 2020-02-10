import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';
import { getToken, createSession } from '../services';

/**
 * @class Helper
 * @description All helpers(usually finalizers function) between resolvers
 */
export default class Helper {
  static async verifyUser(session, req) {
    try {
      const { token } = await getToken(session);
      req.token = token;
      return jwt.verify(req.token, process.env.PRIVATE_KEY);
    } catch (err) {
      return null;
    }
  }

  static async signUser(user) {
    const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY);
    return createSession({ token, user: user._id });
  }

  static async uploadFile(file) {
    const { NODE_ENV, CLOUDINARY_URL } = process.env;
    cloudinary.config(CLOUDINARY_URL);
    return cloudinary.v2.uploader.upload(file, {
      tags: NODE_ENV,
      folder: NODE_ENV,
      use_filename: true,
    });
  }
}
