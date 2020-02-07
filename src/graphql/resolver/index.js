import Query from '../../services';
import Middleware from '../../middlewares';

const session = async ({ token }, { email, password }, { user }) => {
  if (user) {
    await Query.deleteSession(token);
  }
  const ins = await Query.signin(email, password);
  if (ins) {
    return Middleware.signUser(ins);
  }
};

export default { session };
