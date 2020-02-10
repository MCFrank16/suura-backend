import { postIp } from '../services';
import Util from '../utils';
import Helper from '../helpers';

export default {
  authorize: async (req, res, next) => {
    await postIp(req.ip || req.ips || '');
    req.user = await Helper.verifyUser(Util.getToken(req), req);
    next();
  },
  upload: async (req, res) => {
    try {
      const data = {};
      const { files } = req;
      if (files && files.file && /image/g.test(files.file.mimetype.match(/image/g))) {
        const result = await Helper.uploadFile(files.file.tempFilePath);
        data.url = result.secure_url || result.url;
      }
      res.status(200).json({ upload: data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
