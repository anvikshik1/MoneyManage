import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpenses from '../../components/AllExpenses/AllExpenses';
import { showHeaderItem } from '../../utils/ReuseLogic';


const ExpensesScreens = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={HomeScreen} screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AllExpenses" component={AllExpenses}  />
    </Stack.Navigator>
  )
}

export default ExpensesScreens