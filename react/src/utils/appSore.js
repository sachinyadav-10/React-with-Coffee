import { useReducer } from "react";
import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore = configureStore({
    
    // add slices 
    reducer : {
        cart :cartReducer,
    },
});
export default appStore;