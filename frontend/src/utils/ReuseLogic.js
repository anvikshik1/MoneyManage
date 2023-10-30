
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Icon = (provider, name, size, color) => {
    if(provider == "Ionicons"){
      return <Ionicons name={name} size={size} color={color}/>
    }else if(provider == "Fontisto"){
      return <Fontisto name={name} size={size} color={color}/>
    }else if(provider == "MaterialCommunityIcons"){
      return <MaterialCommunityIcons name={name} size={size} color={color}/>
    }else if(provider == "Octicons"){
      return <Octicons name={name} size={size} color={color}/>
    }else if(provider == "AntDesign"){
      return <AntDesign name={name} size={size} color={color}/>
    }else if(provider == "Feather"){
      return <Feather name={name} size={size} color={color}/>
    }else if(provider == "Foundation"){
      return <Foundation name={name} size={size} color={color}/>
    }else if(provider == "Entypo"){
      return <Entypo name={name} size={size} color={color}/>
    }else if(provider == "MaterialIcons"){
      return <MaterialIcons name={name} size={size} color={color}/>
    }else if(provider == "FontAwesome5"){
      return <FontAwesome5 name={name} size={size} color={color}/>
    }else if(provider == "FontAwesome"){
      return <FontAwesome name={name} size={size} color={color}/>
    }
}

export const showHeaderItem = {
  headerShown: true,  
  headerStyle: { backgroundColor: '#236AB9',},
  headerTintColor: '#fff',
  headerTitleStyle:{fontFamily:'DotsAllForNow',fontSize:18}
};

export const getLocalData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const data = jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null;
      return await data;
    } catch(e) {
     console.log(e)
    }
}

export const storeData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
}