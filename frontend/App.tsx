import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './src/router/Tabs';
import { Provider } from 'react-redux';
import { store } from './store';
import { LogBox } from 'react-native';
import Routers from './src/router/Routers';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;