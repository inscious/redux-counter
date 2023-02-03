import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementBy10,
    decrementBy10,
    resetCounter,
} from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col max-w-md items-center justify-center bg-stone-00 w-full bg-slate-00">
            <span className="text-white text-4xl text">{count}</span>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                className="text-black rounded-lg py-2 w-full bg-slate-500 hover:text-white duration-100 my-5 hover:bg-slate-400"
            >
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                className="text-black rounded-lg py-2 w-full bg-slate-500 hover:text-white duration-100 mb-5 hover:bg-slate-400"
            >
                Decrement
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(incrementBy10())}
                className="text-black rounded-lg py-2 w-full bg-slate-500 hover:text-white duration-100 mb-5 hover:bg-slate-400"
            >
                Increment by 10
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrementBy10())}
                className="text-black rounded-lg py-2 w-full bg-slate-500 hover:text-white duration-100 mb-5 hover:bg-slate-400"
            >
                Decrement by 10
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(resetCounter())}
                className="text-black rounded-lg py-2 w-full bg-slate-500 hover:text-white duration-100 mb-5 hover:bg-slate-400"
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
