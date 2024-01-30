import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isMenubarWide: true,
        position: "static"
    },
    reducers: {
        toggleMenubarSize: (state) => { state.isMenubarWide = !state.isMenubarWide },
        collapseMenubar: (state) => { state.isMenubarWide = false },
        toggleMenubarPositionValue: (state) => { state.position === "static" ? state.position = "fixed" : state.position = "static" }
    }
});

export const { toggleMenubarSize, collapseMenubar, toggleMenubarPositionValue } = menuSlice.actions;
export default menuSlice.reducer;