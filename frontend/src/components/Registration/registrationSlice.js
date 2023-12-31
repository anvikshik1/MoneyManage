import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../utils/constant";

export const registrationData = createAsyncThunk("user/register", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/auth/register`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
});

export const loginData = createAsyncThunk("user/register", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}auth/login`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
})


export const regSlice = createSlice({
    name : "register",
    initialState : {
        registration : [],
        login : [],
        loading     : false,
        error       : false,
    },

    extraReducers : builder => {
        builder.addCase(registrationData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(registrationData.fulfilled, (state, action) => {
            state.loading       = false,
            state.registration  = action.payload;
        })
        builder.addCase(registrationData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

        builder.addCase(loginData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(loginData.fulfilled, (state, action) => {
            state.loading       = false,
            state.login  = action.payload;
        })
        builder.addCase(loginData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

     
    }

})


// export const {addExpense} = regSlice.actions;

export default regSlice.reducer;