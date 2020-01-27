export default {
  validateUserName: value => /^[A-Za-z._0-9]+$/.test(value),
  validatePassword: value => /[a-zA-Z]+/.test(value) && !/\s+/.test(value) && /[0-9]+/.test(value) && /[-!$%^&*()_+|~=``{}\\:";'<>?,./@]+/.test(value),
};
