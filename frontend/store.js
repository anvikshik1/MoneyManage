import { configureStore } from '@reduxjs/toolkit'
import HomeData from './src/components/HomeScreen/HomeSclice'
// import  addExpense  from './src/components/HomeScreen/HomeSclice'


export const store = configureStore({
  reducer: {
    expenseData: HomeData
  },
})