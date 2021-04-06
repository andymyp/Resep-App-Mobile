import {get, post, put, del} from './RestApi';

const Api = {
  login: async (email, password) => {
    const body = JSON.stringify({
      email: email,
      password: password,
    });

    return await post('/login', body);
  },

  user: async () => {
    return await get('/user');
  },
};

export default Api;
