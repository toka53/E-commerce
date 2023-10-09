import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";
import { CategoryReducer } from "./CategoryReducer";


export let Store  =configureStore({
    // reducres
   reducer:{
    counter:CounterReducer,
    Categroies:CategoryReducer
   }

})