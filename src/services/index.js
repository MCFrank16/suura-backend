import { Session, User } from '../mongo/models';
import Util from '../utils';

export default {
  deleteSession: async token => Session.deleteOne({ token }),
  createSession: async ({ token, user }) => Session.create({ token, user }),
  signin: async (email, password) => {
    try {
      const $or = [{ email }, { username: email }];
      const user = await (await User.findOne({ $or }).exec()).toJSON();
      if (Util.comparePassword(password, user.password)) {
        delete user.password;
        return user;
      }
      throw new Error();
    } catch (err) {
      return null;
    }
  },
  user: async id => (await User.findById(id).exec()).toJSON(),
  users: async (limit = -1, skip = 0) => User.find().limit(limit).skip(skip)
};
