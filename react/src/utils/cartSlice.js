import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name : 'cart',
    initialState :{
        items:[]
    },
    reducers : {
        addItems : (state,action)=>{
            //mutating the state here --  modifying the state here directly 
            state.items.push(action.payload);            
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            //  state : [] ... this is not mutating of the state this give a refrence to it not the mutation
            state.items.length=0;
            // return {items : []}; // alternate of mutating the sate is the returning of the new state 
            
            //  this wil show the state objext properly , if not use current the  it show the proxy object 
            console.log(current(state)); 
        }
    }
})
export const{addItems,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;
