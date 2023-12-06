import { configureStore } from "@reduxjs/toolkit";
import { Ind } from "./Slices/HomeSlice";

export const store = configureStore({
    reducer: {
        Index: Ind
    }
})