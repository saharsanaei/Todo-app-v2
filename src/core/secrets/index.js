import config from '../configs/index.js';

const getSecret = (key) => {
  return config[key];
};

export { getSecret };