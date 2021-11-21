import axios from 'axios';
import { checkUser, loginStarts, loginSuccess, setError } from './userRedux';

export const registerUser = async (dispatch, user) => {
  dispatch(loginStarts);

  const options = {
    'Content-Type': 'application/json',
    withCredentials: true,
    credentials: 'include',
  };

  try {
    const res = await axios.post(
      `http://localhost:5000/auth/register`,
      user,
      options
    );
    console.log('1');

    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log('2');
    dispatch(setError(error.response.data));
    setTimeout(() => {
      dispatch(setError(null));
    }, 1500);
  }
};

export const loginUser = async (dispatch, data) => {
  dispatch(loginStarts);
  const options = {
    'Content-Type': 'application/json',
    withCredentials: true,
    credentials: 'include',
  };

  try {
    const res = await axios.post(
      'http://localhost:5000/auth/login',
      data,
      options
    );
    dispatch(loginSuccess(res.data.data.user));
  } catch (error) {
    dispatch(setError(error.response.data));
    setTimeout(() => {
      dispatch(setError(null));
    }, 1500);
  }
};
