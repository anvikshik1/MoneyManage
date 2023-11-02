import { StyleSheet,TouchableOpacity,View,Text,Modal,Dimensions,TextInput } from 'react-native';
import React, {useState,useEffect} from 'react';
import { GlobalStyles } from '../../utils/GlobalStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { AddExpenseData, addExpense } from './HomeSclice';
import { useDispatch } from 'react-redux';
import { ByIdExpenseData, EditExpenseData } from '../HomeScreen/HomeSclice';

  const EditModal = ({setModalEdit,modalEdit,getAllExpenses,id}) => {
    const dispatch = useDispatch();

    const [defaultMoney, setdefaultMoney] = useState('');
    const [defaultSpend, setdefaultSpend] = useState('');

    const handleEdit = async () =>{
        const postData = {id:id,spend_for:defaultSpend,spend_amount:parseInt(defaultMoney)}
        console.log(postData);
        const result = await dispatch(EditExpenseData(postData));
        console.log("result",result);
        setModalEdit(false);
        getAllExpenses();
    }

    const onType = (text) => {
        setdefaultSpend(text)
    }

    const onTypeMoney = (textValue) =>{
        if(!isNaN(textValue) && !isNaN(parseInt(textValue))) {
            setdefaultMoney(parseInt(textValue))
        } else if (textValue === "") {
            setdefaultMoney(null)
        }
    }

    const fetchData = async () => {
        const data = await dispatch(ByIdExpenseData(id));
        setdefaultSpend(data?.payload?.expenses?.spend_for)
        setdefaultMoney(data?.payload?.expenses?.spend_amount?.toString());
    }

      useEffect(() => {
        fetchData();
      },[id])
  
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalEdit}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                    style={styles.inputAddDescription}
                    onChangeText={onType}
                    value={defaultSpend}
                    maxLength={30}
                    placeholderTextColor={'#879FBA'}
                    defaultValue={defaultSpend}
                />
                <TextInput
                    style={styles.inputAddDescription}
                    onChangeText={onTypeMoney}
                    value={defaultMoney?.toString()}
                    keyboardType="numeric"
                    maxLength={5}
                    placeholderTextColor={'#879FBA'}
                    defaultValue={defaultMoney}
                />
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity 
                    style={GlobalStyles.leftButton} 
                    onPress={() =>{setModalEdit(false), setdefaultSpend(null)}}>
                    <Text style={GlobalStyles.leftButtonsText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={GlobalStyles.rightButton}
                    onPress={() => handleEdit()}>
                    <Text style={GlobalStyles.rightButtonsText}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>  
    )
  }
  
  export default EditModal;

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