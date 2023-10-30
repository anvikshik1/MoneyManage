import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import { useSelector } from 'react-redux'
import Container from '../../screens/container/Container'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import { styles } from './AllExpensesStyles'
import { Icon } from '../../utils/ReuseLogic'
import ListModal from './ListModal'
// import { addExpense } from '../HomeScreen/HomeSclice';

const AllExpenses = ({navigation}) => {
  const result = useSelector((state) => state?.expenseData?.addExpenseData);
  const [expenseData,setExpenseData ] = useState(result)
  const [listModal,setListModal ] = useState(false);
  const [modalView,setModalView ] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: 'All Expenses'});
  },[])
 
  const total = expenseData?.map((data) => data?.money).reduce((all, a) => all + a, 0);

  const handleDelete = (index) =>{
    const deleted = expenseData.filter((data,ind) => ind !== index);
    setExpenseData(deleted);
  }
  const handlelistModal = () =>{
    setListModal(!listModal);
  }


  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <Container>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {Icon("Ionicons", "arrow-back-sharp", 30, "#133863")}
        </TouchableOpacity>
          <Text style={GlobalStyles.title}>Expenses List</Text>
        <TouchableOpacity onPress={() => handlelistModal()}> 
          {Icon("Entypo", "dots-three-vertical", 22 , "#133863")}
        </TouchableOpacity>
        {listModal && <ListModal setModalView={setModalView} modalView={modalView}/>}
      </View>
        <TouchableOpacity style={GlobalStyles.customButton} onPress={()=> navigation.navigate("HomeScreen")}>
          <Text style={GlobalStyles.customButtonText}> add one more</Text>
        </TouchableOpacity>
        {expenseData?.map((expenses,index) =>(
          <View style={styles.expensesList} key={index}>
            <Text style={styles.allExpenses}>{expenses?.description}</Text>
            <View style={styles.allMoneyBox}>
              <Text style={styles.allMoney}>{expenses?.money}₹</Text>
              <View style={styles.deleteBox}>
                <TouchableOpacity style={styles.editIcon}>
                  {Icon("Feather", "edit", 25, "#609CE1")}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(index)}>
                  {Icon("AntDesign", "delete", 25, "#ff0000")}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        {total !== 0 && <View style={styles.totalBox}>
          <Text style={styles.totalCount}>Total : {total}₹ </Text>
        </View>}
      </Container>
      
    </SafeAreaView>
  )
}

export default AllExpenses;