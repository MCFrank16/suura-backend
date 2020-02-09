import Resolver from '../resolver';

const user = async (_, args, req) => Resolver.queryUser(args, req);
const users = async (_, args, req) => Resolver.users(args, req);

export default { user, users };
