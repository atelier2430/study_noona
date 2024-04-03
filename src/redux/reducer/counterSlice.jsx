import { createSlice } from '@reduxjs/toolkit'

const initialState={
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action){
      // eslint-disable-next-line no-param-reassign
      state.count = Math.min(20,state.count + action.payload.num)
    },
    decrement(state, action){
      // eslint-disable-next-line no-param-reassign
      state.count = Math.max(-20,state.count - action.payload.num)
    },
    countReset(state){
      // eslint-disable-next-line no-param-reassign
      state.count = 0
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer