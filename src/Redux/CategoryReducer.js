import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// loading false  , error null , categories []
// call reducres{increase:}
//async

export  let getAllCategories=createAsyncThunk('CategorySlice/getAllCategories',
 async function(id){
       let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
       return data.data;
 })

// pending
// fullfiled reslove 
// rejected

let  initialState= {isLoading:false,isError:null,categories:[]}
let CategorySlice=createSlice({
    name:'CategorySlice',
    initialState,
    extraReducers:(builder)=>{
                    builder.addCase(getAllCategories.pending,(state)=>{
                                state.isLoading=true;
                            })

                    builder.addCase(getAllCategories.fulfilled,(state,actions)=>{
                        state.isLoading=false;
                        state.categories=actions.payload;
                })      

                    builder.addCase(getAllCategories.rejected,(state,actions)=>{
                    state.isLoading=false;
                    state.isError=actions.payload;
            })  
    }
 
})

// next version 


export let CategoryReducer=CategorySlice.reducer;

// extraReducers:{
//     [getAllCategories.pending]:(state)=>{
//           state.isLoading=true;
//     },
//     [getAllCategories.fulfilled]:(state,actions)=>{
//        state.isLoading=false;
//        state.categories=actions.payload;
//  },  [getAllCategories.rejected]:(state,actions)=>{
//      state.isLoading=false;
//     state.isError=actions.payload;
// }, 
// }


