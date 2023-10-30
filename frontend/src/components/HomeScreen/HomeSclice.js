import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocalData } from "../../utils/ReuseLogic";
import { mainApi } from "../../utils/constant";





export const AddExpenseData = createAsyncThunk("user/addexpenses", async(regData)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
       const responce = await fetch(`${mainApi.baseUrl}expenses/add-expenses`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})
});

export const GetExpenseData = createAsyncThunk("user/getexpenses", async(regData)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
       const responce = await fetch(`${mainApi.baseUrl}expenses/filter-expenses`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})
})


export const HomeData = createSlice({
    name : "homeScreen",
    initialState : {
        addExpense : [],
        getExpense : [],
        loading     : false,
        error       : false,
    },

    extraReducers : builder => {
        builder.addCase(AddExpenseData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(AddExpenseData.fulfilled, (state, action) => {
            state.loading     = false,
            state.addExpense  = action.payload;
        })
        builder.addCase(AddExpenseData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

        
        builder.addCase(GetExpenseData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(GetExpenseData.fulfilled, (state, action) => {
            state.loading     = false,
            state.getExpense  = action.payload;
        })
        builder.addCase(GetExpenseData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })
    }

})

export default HomeData.reducer;