import { createSlice } from "@reduxjs/toolkit";

const initialState={
  id: '',
  password: '',
  authenciate: false,
}

const authenciateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action){
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload.id;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;
      // eslint-disable-next-line no-param-reassign
      state.authenciate = true;
    },
    logout(state){
      // eslint-disable-next-line no-param-reassign
      state.id = '';
      // eslint-disable-next-line no-param-reassign
      state.password = '';
      // eslint-disable-next-line no-param-reassign
      state.authenciate = false;
    }
  }
})

export const authenciateActions = authenciateSlice.actions
export default authenciateSlice.reducer