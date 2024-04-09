import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { data } from "autoprefixer";

export const STATUS = {

    SUCCESS:'Success',
    IDLE:'Idle',
    ERROR:'Error',
    LOADING:'Loading',
}

const userSlice = createSlice({

    name: 'userSlice',
    
    initialState:{
        data:{},
        status: STATUS.IDLE,
        message:"",
    },

    reducers:{



    },

    extraReducers:(builder)=>{

        builder.addCase(getUser.fulfilled, (state,action)=>{

            state.data = action.payload;

        })
    }


})

export default userSlice.reducer;
export const getUser = createAsyncThunk('fetch/users',async()=>{

    
});