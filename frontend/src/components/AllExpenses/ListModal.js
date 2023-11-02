import { StyleSheet,TouchableOpacity,View,Text,Modal,Dimensions,TextInput } from 'react-native';
import React, {useState} from 'react';

const ListModal = () => {
  return (
    <View style={styles.modalView}>
        <TouchableOpacity style={styles.weekly}>
            <Text style={styles.textNormal}>weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.textNormal}>monthly</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ListModal;

export const styles = StyleSheet.create({
  
    modalView: {
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      position:'absolute',
      zIndex:100,
      padding:15,
      right:0,
      top:40
    },
   
    textNormal:{
        fontFamily:"DotsAllForNow",
    },
    weekly:{
        borderBottomWidth:1,
        width:'100%',
        paddingBottom:5,marginBottom:5
    },

})