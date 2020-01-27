import { TC } from '../../mongo/models';

export default {
  userCreate: TC.UserTC.getResolver('createOne'),
  userDelete: TC.UserTC.getResolver('removeMany'),
};
