import Resolver from '../resolver';

const session = async (_, args, req) => Resolver.mutationSession(args, req);
const logout = async (_, args, req) => Resolver.logout(req);
const user = async (_, args, req) => Resolver.mutationUser(args, req);
const upload = async (_, args) => Resolver.upload(args);
const logoutAll = async (_, args, req) => Resolver.logoutAll(req);

export default { session, logout, user, upload, logoutAll };
