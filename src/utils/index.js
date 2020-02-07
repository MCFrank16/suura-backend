import bcrypt from 'bcrypt';

export default {
  validateUserName: value => /^[A-Za-z_0-9]+$/.test(value),
  validatePassword: value => /[a-zA-Z]+/.test(value) && !/\s+/.test(value) && /[0-9]+/.test(value) && /[-!$%^&*()_+|~=``{}\\:";'<>?,./@]+/.test(value),
  validateName: value => /^[A-Za-z_0-9 ]+$/.test(value),
  validatePhoneNo: value => /^\+250-\d{3}-\d{3}-\d{3}$/.test(value),
  hashPassword: password => bcrypt.hashSync(password, bcrypt.genSaltSync()),
  comparePassword: (password, encPassword) => bcrypt.compareSync(password, encPassword),
};
