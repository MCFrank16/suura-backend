import Resolver from '../resolver';

const session = async (_, args, req) => Resolver.mutationSession(args, req);
const logout = async (_, args, req) => Resolver.logout(args, req);

export default { session, logout };
