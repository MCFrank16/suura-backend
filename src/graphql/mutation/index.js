import Resolver from '../resolver';

const session = async (_, args, req) => Resolver.mutationSession(args, req);
const logout = async (_, __, req) => Resolver.logout(req);
const user = async (_, args, req) => Resolver.mutationUser(args, req);
const logoutAll = async (_, __, req) => Resolver.logoutAll(req);

export default { session, logout, user, logoutAll };
