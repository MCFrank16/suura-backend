import model from '../../mongo/models';

const { User } = model;

const findUserById = async id => {
  const { password, ...data } = await User.findById(id);
  return data;
};

const findUserByMany = async condition => User.find(condition, { password: 0 });

export default { findUserById, findUserByMany };
