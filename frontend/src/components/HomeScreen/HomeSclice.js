import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocalData } from "../../utils/ReuseLogic";




export const AddExpenseData = createAsyncThunk("user/register", async(regData)=>{
    getLocalData("USER_INFO").then(async (res) => {
        console.log("accessToken",res?.data?.accessToken);
    
    try{
       const responce = await fetch(`https://money-manage-six.vercel.app/expenses/add-expenses`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': res?.data?.accessToken
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
        addExpenseData : [],
    },
    // reducers : {
    //     addExpense : (state,action) => {
    //         state.addExpenseData = [...state.addExpenseData, action.payload];
    //     }
    // },

    extraReducers : builder => {
        builder.addCase(AddExpenseData.pending, (state) => {
            state.loading       =  true;
        })
        builder.addCase(AddExpenseData.fulfilled, (state, action) => {
            state.loading       = false,
            state.addExpenseData  = action.payload;
        })
        builder.addCase(AddExpenseData.rejected, (state) => {
            state.loading = false;
            state.error = false
        })
    }

})


export const {addExpense} = HomeData.actions;

export default HomeData.reducer;