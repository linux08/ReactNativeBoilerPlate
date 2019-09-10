import * as types from '../actions/actionTypes';



interface User {
  user: any;
  loading: boolean;
  error: string
}

type State = User;
const userInfoReducer = (
  state:State,
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userInfoReducer;