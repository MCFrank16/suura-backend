import Service from '../services';
import Util from '../utils';
import Helper from '../helpers';

export default {
  authorize: async (req, res, next) => {
    await Service.postIp(req.ip || req.ips || '');
    const token = Util.getToken(req);
    const user = await Helper.verifyUser(token);
    req.token = token;
    req.user = user;
    next();
  },
};
