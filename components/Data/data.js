import { createSlice } from '@reduxjs/toolkit'
//let key = 0
const initialState = {
  amount: 0,
  arr: [],
  key: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addAmount: (state, action) => {
      state.arr.push(action.payload)
      if(state.arr[state.arr.length-1].operator=='+'){
        state.amount += parseInt(state.arr[state.arr.length-1].Amount)
      }
      else{
        state.amount -= parseInt(state.arr[state.arr.length-1].Amount)
      }
      state.arr[state.arr.length-1].key=state.key
      state.key+=1;
     // console.log(state.amount)
    },
    deleteArr: (state,action) => {
      let arr2 = state.arr
      //console.log('acr',action.payload)
      arr2 = arr2.filter((arr2) => arr2.key!=action.payload);
      state.arr = arr2
     // console.log('len',state.arr.length)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAmount,deleteArr } = counterSlice.actions

export default counterSlice