import { SchemaError } from 'apollo-server-express';
import { Session } from '../mongo/models';

export const deleteSession = async token => (await Session.deleteOne({ token })).deletedCount;

export const deleteSessions = async user => (await Session.deleteMany({ user })).deletedCount;

export const getToken = async token => Session.findOne({ token });

export const createSession = async ({ token, user }) => {
  try {
    return Session.create({ token, user });
  } catch (err) {
    throw new SchemaError(err.message);
  }
};
