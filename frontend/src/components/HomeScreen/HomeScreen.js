import { View, Text , SafeAreaView,TouchableOpacity,TextInput,ScrollView,Image} from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet';
import { styles } from './HomeScreenStyles';
import HomeModal from './Modal';
import Header from '../../screens/Header/Header';
import Container from '../../screens/container/Container';
import { Icon } from '../../utils/ReuseLogic';

const HomeScreen = ({navigation}) => {
  const [expenses, setExpenses] = useState(null);
  const [modalView, setModalView] = useState(false);
  const money = [1,2,10,50,100,200,500,1000,2000,10000];
  
  const handleSelect = (num) =>{
    if(expenses){
      setExpenses(expenses + num);
    }else{
      setExpenses(num);
    }
  }

  const onType = (textValue) =>{
    if(!isNaN(textValue) && !isNaN(parseInt(textValue))) {
      setExpenses(parseInt(textValue))
    } else if (textValue === "") {
      setExpenses(null)
    }
  }

  const handleCancel = () =>{
    setExpenses(null)
  }

  const handleModal = () =>{
    if(expenses){
      setModalView(true);
    };
  }

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <HomeModal setModalView={setModalView} modalView={modalView} expenses={expenses}/>
        <View style={styles.header}>
          {/* <Image source={require('../../assets/images/prifile.jpg')} style={styles.ProfileImg}/>
          <View style={styles.container}>
            <Text style={GlobalStyles.title}>Add expense</Text>
          </View> */}
          <TouchableOpacity onPress={() => navigation.navigate("AllExpenses")}>
            {Icon("Ionicons", "menu", 40, "#133863")}
          </TouchableOpacity>
        </View>
      <Container>
          <TextInput
            style={styles.inputAddedExpenses}
            onChangeText={onType}
            value={expenses?.toString()}
            keyboardType="numeric"
            maxLength={5}
            placeholderTextColor={'#879FBA'}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={GlobalStyles.leftButton} onPress={() => handleCancel()}>
              <Text style={GlobalStyles.leftButtonsText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={GlobalStyles.rightButton} onPress={() => handleModal()}>
              <Text style={GlobalStyles.rightButtonsText}>Send</Text>
            </TouchableOpacity>
          </View>
      </Container> 
      <ScrollView 
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
        keyboardShouldPersistTaps='handled'
      >
        <Container>
          <View style={styles.moneyContainer}>
            {money?.map((expenses,index) => (
              <TouchableOpacity style={styles.button} key={index} onPress={() => handleSelect(parseInt(expenses))}>
                <Text style={styles.money}>{expenses} ₹</Text> 
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;