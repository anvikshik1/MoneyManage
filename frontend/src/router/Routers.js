import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import OTPVerify from '../components/OTPVerify/OTPVerify';
OTPVerify

const Routers = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={Login} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="OTPVerify" component={OTPVerify} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
    </Stack.Navigator>
  )
}

export default Routers