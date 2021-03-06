const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
};

export const actions = {
  login: user => {
    return {type: types.LOGIN, user};
  },
  logout() {
    return {type: types.LOGOUT};
  },
};

const initialState = {
  token: '',
  user: '',
};

export const auth = (state = initialState, action) => {
  const {type, user} = action;

  switch (type) {
    case types.LOGOUT:
      return Object.assign({}, initialState);

    case types.LOGIN:
      return Object.assign({}, state, {
        token: user.token,
        user: user.data,
      });

    default:
      return state;
  }
};
