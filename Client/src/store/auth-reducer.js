// create Slice -- auto create actions with reducer
import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: { auth: {} },
  reducers: {
    LOGIN(state, action) {
      return { auth: action.payload };
    },
    LOGOUT(state, action) {
      return { auth: false };
    },
    SIGN_UP(state, action) {
      return { auth: action.payload };
    },
  },
});

export const { LOGIN, SIGN_UP, LOGOUT } = authReducer.actions;

export default authReducer.reducer;

const baseUrl = 'http://localhost:9000/auth/';

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    dispatch(LOGOUT());
  };
};

export const login = (user) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl + 'login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    let data = await response.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('auth', data.auth);
    }
    dispatch(LOGIN(data));
  };
};

export const singup = (user) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl + 'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    let data = await response.json();
    console.log(data);
    dispatch(SIGN_UP(data));
  };
};
