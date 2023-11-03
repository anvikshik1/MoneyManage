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

export const GetExpenseData = createAsyncThunk("user/getexpenses", async()=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
        const responce = await fetch(`${mainApi.baseUrl}expenses/all-expenses`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
})
})

export const DeleteExpenseData = createAsyncThunk("user/deleteExpense", async(id)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
        const responce = await fetch(`${mainApi.baseUrl}expenses/all-expenses/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
})
})

export const ByIdExpenseData = createAsyncThunk("user/byIdExpense", async(id)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
        const responce = await fetch(`${mainApi.baseUrl}expenses/all-expenses/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
})
})

export const EditExpenseData = createAsyncThunk("user/editExpense", async(regData)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
        const responce = await fetch(`${mainApi.baseUrl}expenses/all-expenses/${regData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${res?.data?.accessToken}`
            },
            body : JSON.stringify({
                spend_amount: regData.spend_amount,
                spend_for: regData.spend_for
            })
        });
        const result = await responce.json();
        return result;
    }
    catch(e){
       console.log(e);
    }
})
})

export const FilterExpensesData = createAsyncThunk("user/filterExpenses", async(regData)=>{
    return getLocalData("USER_INFO").then(async (res) => {
    try{
        const responce = await fetch(`${mainApi.baseUrl}expenses/filter-expenses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${res?.data?.accessToken}`
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
})


export const ExpensesData = createSlice({
    name : "homeScreen",
    initialState : {
        addExpense : [],
        getExpense : [],
        deleteExpense : [],
        byIdExpense : [],
        editExpense : [],
        filterExpenses : [],
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


        builder.addCase(DeleteExpenseData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(DeleteExpenseData.fulfilled, (state, action) => {
            state.loading     = false,
            state.deleteExpense  = action.payload;
        })
        builder.addCase(DeleteExpenseData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

        builder.addCase(ByIdExpenseData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(ByIdExpenseData.fulfilled, (state, action) => {
            state.loading     = false,
            state.byIdExpense  = action.payload;
        })
        builder.addCase(ByIdExpenseData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

        builder.addCase(EditExpenseData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(EditExpenseData.fulfilled, (state, action) => {
            state.loading     = false,
            state.editExpense  = action.payload;
        })
        builder.addCase(EditExpenseData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })

        builder.addCase(FilterExpensesData.pending, (state) => {
            state.loading  =  true;
        })
        builder.addCase(FilterExpensesData.fulfilled, (state, action) => {
            state.loading     = false,
            state.filterExpenses  = action.payload;
        })
        builder.addCase(FilterExpensesData.rejected, (state) => {
            state.loading = false;
            state.error   = false;
        })
    }
})

export default ExpensesData.reducer;