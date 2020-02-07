import Resolver from '../resolver';

const session = async (root, args, context) => Resolver.session(root, args, context);
export default { session };
