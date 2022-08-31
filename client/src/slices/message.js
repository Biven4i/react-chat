import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messageText: '',
        userName: '',
        time: '',
        date: '',
    },
    reducers: {
        setMessageText: (state, action) => {
            state.messageText = action.payload;
        },
    }
});


export const { setMessageText } = messageSlice.actions;

export default messageSlice.reducer;