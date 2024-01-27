import { createSlice } from "@reduxjs/toolkit";

const cachedSuggestionSlice = createSlice({
    name: "searchSuggestionCache",
    initialState: {

    },
    reducers: {
        cacheData: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }

})
export const { cacheData } = cachedSuggestionSlice.actions;
export default cachedSuggestionSlice.reducer;