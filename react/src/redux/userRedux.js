import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    checkUser: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginStarts: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    setError: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const { checkUser, loginStarts, loginSuccess, setError } =
  userSlice.actions;
export default userSlice.reducer;
