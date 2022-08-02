import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        password: '',
        passwordCheck: '',
        isOnline: false,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPasswordCheck: (state, action) => {
            state.passwordCheck = action.payload;
        }
    }
});

export const { setName, setPassword, setPasswordCheck } = userSlice.actions;

export default userSlice.reducer;