import * as types from '../actions/actionTypes';

const userInfoReducer = (
  state = {
    user: {},
    loading: true,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userInfoReducer;