import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
  arr: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addAmount: (state, action) => {
      state.arr.push(action.payload)
      if(state.arr[state.arr.length-1].operator=='+'){
        console.log("yes", typeof state.amount)
        state.amount = parseInt(state.amount) + parseInt(state.arr[state.arr.length-1].Amount)
      }
      else{
        state.amount -= parseInt(state.arr[state.arr.length-1].Amount)
      }
      //console.log(typeof state.amount)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAmount } = counterSlice.actions

export default counterSlice