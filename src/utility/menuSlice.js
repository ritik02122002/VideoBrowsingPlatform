import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isSideBarLarge: true,
        position: "static"
    },
    reducers: {
        toggleScrollbarSize: (state) => { state.isSideBarLarge = !state.isSideBarLarge },
        collapseScrollbar: (state) => { state.isSideBarLarge = false },
        togglePosition: (state) => { state.position === "static" ? state.position = "fixed" : state.position = "static" }
    }
});

export const { toggleScrollbarSize, collapseScrollbar, togglePosition } = menuSlice.actions;
export default menuSlice.reducer;