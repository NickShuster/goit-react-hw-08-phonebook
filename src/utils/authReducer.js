import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './actions';

const initialState = { user: null, token: null, error: null };

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authActions.registerSuccess, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.error = null;
    })
    // Додайте інші обробники дій тут, наприклад, для loginSuccess та logoutSuccess
    .addCase(authActions.loginSuccess, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.error = null;
    })
    .addCase(authActions.logoutSuccess, (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    })
    .addCase(authActions.registerError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(authActions.loginError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(authActions.logoutError, (state, { payload }) => {
      state.error = payload;
    });
});

export default authReducer;