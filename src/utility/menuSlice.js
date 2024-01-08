import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        isScrollbarLarge:true
    },
    reducers:{
        toggleScrollbar:(state)=>{ state.isScrollbarLarge=!state.isScrollbarLarge},
        collapseScrollbar:(state)=>{state.isScrollbarLarge=false}
    }
});

export const {toggleScrollbar,collapseScrollbar}=menuSlice.actions;
export default menuSlice.reducer;