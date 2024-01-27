import { createSlice } from "@reduxjs/toolkit";

const liveVideoSlice = createSlice({

    name: "liveVideo",
    initialState: {
        data: null
    },
    reducers: {
        addLiveVideoData: (state, action) => {

            state.data = { ...action.payload };


        }
    }
})

export const { addLiveVideoData } = liveVideoSlice.actions;
export default liveVideoSlice.reducer;