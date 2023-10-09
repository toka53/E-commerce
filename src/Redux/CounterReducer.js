

  //  .reducer  <- createSlice({}) 

import { createSlice } from "@reduxjs/toolkit";

 let initialState={count:0}
  let CounterSlice=createSlice({
    name:'CounterSlice',
    initialState,
    reducers:{
      increase:(state)=>{
        //proxy
         state.count+=1;
        console.log("Increase");
      } ,

      decrease:(state)=>{
        state.count-=1;
        console.log("Decrease");
      } ,
      increaseByValue:(state,actions)=>{
        //   console.log(actions);
        state.count+=actions.payload;
      } ,
    }
  })

//   red action


export let CounterReducer=CounterSlice.reducer;
export let {increase,decrease ,increaseByValue}=CounterSlice.actions