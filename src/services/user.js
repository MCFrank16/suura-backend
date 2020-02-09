import { User } from '../mongo/models';
import Util from '../utils';

export const createUser = async user => User.create(user);

export const getUsers = async (limit, skip) => User.find().limit(limit).skip(skip);

export const getUserByProfile = async username => {
  const $or = [{ username }, { email: username }];
  return User.findOne({ $or });
};

export const getUserById = async id => Util.parseObject(await User.findById(id));

export const emailExists = async email => User.exists({ email });

export const usernameExists = async username => User.exists({ username });
