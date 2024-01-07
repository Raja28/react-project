import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers:{
        add: (state)=> {
            state.value += 1
        },
        dec: (state)=>{
            state.value -= 1
        } 
    }
})
export const {add, dec} = counterSlice.actions
export default counterSlice.reducer