import * as actions from "./../actions/actionsTypes";

const initialState = {
  loading: false,
  error: false,
  user: { localId: null, tokenId: null, refreshToken: null }
};

const authStart = state => {
  return { ...state, loading: true, error: false };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    error: false,
    user: { ...action.payload }
  };
};
const authFail = (state, action) => {
  return { ...state, loading: false, error: action.payload };
};
const authLogOut = (state, action) => {
  return {
    ...state,
    user: { localId: null, tokenId: null, refreshToken: null }
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return authStart(state);
    case actions.AUTH_FAIL:
      return authFail(state, action);
    case actions.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actions.AUTH_SUCCESS:
      return authLogOut(state, action);
    default:
      return state;
  }
};
