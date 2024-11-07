import { createSlice } from "@reduxjs/toolkit";
import {retrieveBugs} from '../bugController'

const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state => retrieveBugs(),

        creeatBugs:(state,actions)=>{

        },
        updateBugs:(state,actions)=>{

        },
        markComplete:(state, actions)=>{

        }
    }
})

export default slice.reducer;

export const{getBugs,creeatBugs,updateBugs,markComplete} = slice.actions