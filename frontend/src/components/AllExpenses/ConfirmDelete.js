import { StyleSheet,TouchableOpacity,View,Text,Modal,Dimensions,TextInput } from 'react-native';
import React, {useState} from 'react';
import { GlobalStyles } from '../../utils/GlobalStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { AddExpenseData, addExpense } from './HomeSclice';
import { useDispatch } from 'react-redux';
import { DeleteExpenseData } from '../HomeScreen/HomeSclice';

  const ConfirmDelete = ({setModalView,modalView,getAllExpenses,id}) => {
    const dispatch = useDispatch();

    const handleAdd = async () =>{
        await dispatch(DeleteExpenseData(id))
        setModalView(false)
        getAllExpenses();
    }
  
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalView}
           >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.confirmationText}>Are you sure do you want to delete?</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity 
                    style={GlobalStyles.leftButton} 
                    onPress={() =>{setModalView(false)}}>
                    <Text style={GlobalStyles.leftButtonsText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={GlobalStyles.rightButton}
                    onPress={() => handleAdd()}>
                    <Text style={GlobalStyles.rightButtonsText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>  
    )
  }
  
  export default ConfirmDelete;

  export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.4)'  
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'80%'
    },
    confirmationText:{
        fontFamily:"DotsAllForNow",
        fontSize:15,
        color:'#091D34',
        textAlign:'center',
        lineHeight:20
    },
    textBold:{
        fontFamily:"DotsAllForNow",
        fontSize:15,
        color:'#091D34'
    },
    textNormal:{
      fontFamily:"Inter-Regular",
    },
    buttonsContainer:{
      flexDirection:'row',
      marginTop:25,
      justifyContent:'space-between',
      width:'100%'
    },
    inputAddDescription:{
      borderWidth:2,
      borderColor:'#133863',
      borderRadius:10,
      textAlignVertical:'top',
      height:50,
      padding:9,
      width:'100%',
      marginTop:20,
      color:"#091D34"
    }
})