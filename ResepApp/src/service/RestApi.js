import axios from 'axios';
import {useSelector} from 'react-redux';

// Devices
// const baseURL = 'http://192.168.43.14:8000/api/';

// Local
// const baseURL = 'http://127.0.0.1:8000/api/';

// Emulator
const baseURL = 'http://10.0.3.2:8000/api/';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const get = url => {
  const token = useSelector(state => state.user.token);

  return api
    .get(url, {headers: {Authorization: `Bearer ${token}`}})
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
};

export const post = (url, body) => {
  const token = useSelector(state => state.user.token);

  return api
    .post(url, body, {headers: {Authorization: `Bearer ${token}`}})
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
};

export const put = (url, body) => {
  const token = useSelector(state => state.user.token);

  return api
    .put(url, body, {headers: {Authorization: `Bearer ${token}`}})
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
};

export const del = url => {
  const token = useSelector(state => state.user.token);

  return api
    .delete(url, {headers: {Authorization: `Bearer ${token}`}})
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
};
