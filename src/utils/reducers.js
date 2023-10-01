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
});

export default authReducer;