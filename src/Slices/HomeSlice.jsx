import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: null
}




export const HomeSlice = createSlice({
    name: 'Index',
    initialState,
    reducers: {
        IndexHandler: (state,action) =>{
            state.value = action.payload
            console.log(state.value)
            

        }
    }
})

export const {IndexHandler} = HomeSlice.actions;
export const Ind = HomeSlice.reducer;
