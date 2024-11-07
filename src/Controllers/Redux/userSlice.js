import { createSlice, CreateSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Sameer Ahmed"})
            state.push({name:"John Doe"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.reducer;