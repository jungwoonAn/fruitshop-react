import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { changeName } from "../slices/userSlice";

export const useUserStore = create(
    immer((set)=>({
        // initialState 역할
        user: {name: '유비', age: 20},

        // reducers 역할
        changeName: ()=>{
            set((state)=>{
                state.user.name = '관우'
            })
        },
        increase: (amount)=>{
            set((state)=>{
                state.user.age += amount;
            })
        }
    }))
)