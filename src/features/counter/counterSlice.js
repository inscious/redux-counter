import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementBy10: (state) => {
            state.value += 10;
        },
        decrementBy10: (state) => {
            state.value -= 10;
        },
        resetCounter: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    incrementBy10,
    decrementBy10,
    resetCounter,
    incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
