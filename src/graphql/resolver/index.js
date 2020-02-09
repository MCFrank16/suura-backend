import { queryUser, mutationUser, users } from './user';
import { mutationSession, logout, logoutAll } from './session';
import upload from './upload';

export default {
  mutationSession,
  logout,
  queryUser,
  mutationUser,
  upload,
  logoutAll,
  users,
};
