import { postIp } from '../services';
import Util from '../utils';
import Helper from '../helpers';

export default {
  authorize: async (req, res, next) => {
    await postIp(req.ip || req.ips || '');
    req.user = await Helper.verifyUser(Util.getToken(req), req);
    next();
  },
};
