import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCount: (state, action) => {
            let idx = state.findIndex(a => a.id === action.payload)
            state[idx].amount += 1;
        },
        sortName: (state) => {
            state.sort((a,b) => a.itme>b.item ? 1 : -1)
        },
        addItem: (state, action) => {
            let idx = state.findIndex(a => a.id === action.payload)
            if(idx >= 0){
                state[idx].amount += 1;
            }else {
                state.push(action.payload)
            }            
        }
    }
})

export const {addCount, sortName, addItem} = cart.actions

export default cart.reducer