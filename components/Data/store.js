import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./data";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export default configureStore({
    reducer:{
       counter:counterSlice.reducer 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
})