import { StyleSheet,TouchableOpacity,View,Text,Modal,Dimensions,TextInput } from 'react-native';
  import React, {useState} from 'react';
import { GlobalStyles } from '../../utils/GlobalStyleSheet';
import { useNavigation } from '@react-navigation/native';
import { AddExpenseData, addExpense } from './HomeSclice';
import { useDispatch } from 'react-redux';

  
  const HomeModal = ({setModalView,modalView,expenses}) => {
    const [description, setDescription] = useState(null);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAdd = async () =>{
      if(description){
        const data = {spend_amount:expenses,spend_for:description};
        console.log("data",data);
        const reasult = await dispatch(AddExpenseData(data));
        console.log("reasult",reasult);
        // navigation.navigate('AllExpenses');
        // setModalView(false);
        // setDescription(null);
      }
    }
    const onType = (text) =>{
      setDescription(text)
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalView}
           >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textBold}>{expenses}₹ adding for {description}</Text>
                {/* <Text style={styles.textNormal}>uJ</Text> */}
                <TextInput
                  style={styles.inputAddDescription}
                  onChangeText={onType}
                  value={description}
                  maxLength={30}
                  placeholderTextColor={'#879FBA'}
                />
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity 
                    style={GlobalStyles.leftButton} 
                    onPress={() =>{setModalView(false), setDescription(null)}}>
                  <Text style={GlobalStyles.leftButtonsText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={GlobalStyles.rightButton}
                    onPress={() => handleAdd()}>
                  <Text style={GlobalStyles.rightButtonsText}>add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>  
    )
  }
  
  export default HomeModal;

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