import Resolver from '../resolver';

const user = async (_, args, req) => Resolver.queryUser(args, req);

export default { user };
