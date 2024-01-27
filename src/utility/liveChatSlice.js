import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        chats: []
    },
    reducers: {
        addChat: (state, action) => {
            if (state.chats.length == 30)
                state.chats.shift();
            state.chats.push(action.payload)

        },
        clearAllChats: (state) => {
            state.chats = [];

        }
    }

})
export const { addChat, clearAllChats } = liveChatSlice.actions;
export default liveChatSlice.reducer;
