import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: { message: "Logged out", loading: false, error: false },
    user: { email: null, isLoggedIn: false, token: null },
  },
  reducers: {
    setCurrentUser: ({ user }, { payload }) => {
      user.email = payload.email;
      user.isLoggedIn = payload.isLoggedIn;
      user.token = payload.token;
    },
    setStatus: ({ status }, { payload }) => {
      status.message = payload.message;
      status.error = payload.error;
      status.loading = payload.loading;
    },
  },
});

export const { setCurrentUser, setStatus } = authSlice.actions;

export const selectAuth = state => {
  // console.log(state.auth);
  return state.auth;
};

export default authSlice.reducer;
