import { View, Text, SafeAreaView, TouchableOpacity ,ScrollView} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../screens/container/Container'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import { styles } from './AllExpensesStyles'
import { Icon, getLocalData } from '../../utils/ReuseLogic'
import ListModal from './ListModal'
import { DeleteExpenseData, GetExpenseData } from '../HomeScreen/HomeSclice'
import ConfirmDelete from './ConfirmDelete'
import EditModal from './EditModal'
import { FilterExpensesData } from './AllExpensesSlice'
// import { addExpense } from '../HomeScreen/HomeSclice';
import moment from "moment";



const AllExpenses = ({navigation}) => {
  
  // const result = useSelector((state) => state?.expenseData?.addExpenseData);
  
  // const [expenseData,setExpenseData] = useState(result);
  const [listModal,setListModal] = useState(false);
  const [modalView,setModalView] = useState(false);
  const [modalEdit,setModalEdit] = useState(false);
  const [id,setId] = useState();
  const [today,setToday] = useState([]);
  const [yesterday,setYesterday] = useState([]);
  const dispatch = useDispatch();

  const getAllExpenses = async () => {
      // const result = await dispatch(GetExpenseData());
      // setExpenseAllData(result?.payload?.expenses);
      // const date = ;
      // const yesterday = ;
      // console.log("yesterday",yesterday);
      // console.log("date",date);
      // const postData = {date:yesterday}
      const Today = await dispatch(FilterExpensesData(
        {date :moment(new Date()).format("YYYY-MM-DD")}
      ));
      const yesterday = await dispatch(FilterExpensesData(
        {date :moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD")}
      ));
      setToday(Today?.payload?.expenses);
      setYesterday(yesterday?.payload?.expenses);
  }

  useEffect(() => {
    navigation.setOptions({ title: 'All Expenses'});
    getAllExpenses();
  },[])
 
  const total = today?.map((data) => data?.spend_amount).reduce((all, a) => all + a, 0);

  const handleDelete = async (id) =>{
    setModalView(true);
    setId(id);
  }

  const hadleEdit = (id) =>{
    setModalEdit(true);
    setId(id);
  }

  const handlelistModal = () =>{
    setListModal(!listModal);
  }

  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <Container>
      <EditModal setModalEdit={setModalEdit} modalEdit={modalEdit} getAllExpenses={getAllExpenses} id={id}/>
      <ConfirmDelete setModalView={setModalView} modalView={modalView} getAllExpenses={getAllExpenses} id={id}/>
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
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        {today.length !== 0 && 
        <Text style={styles.DayWise}>Today {moment(new Date()).format("YYYY-MM-DD")}</Text>}
        {today?.map((expenses,index) =>(
          <View style={styles.expensesList} key={index}>
            <Text style={styles.allExpenses}>{expenses?.spend_for}</Text>
            <View style={styles.allMoneyBox}>
              <Text style={styles.allMoney}>{expenses?.spend_amount}₹</Text>
              <View style={styles.deleteBox}>
                <TouchableOpacity style={styles.editIcon} onPress={() => hadleEdit(expenses?._id)}>
                  {Icon("Feather", "edit", 25, "#609CE1")}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(expenses?._id)}>
                  {Icon("AntDesign", "delete", 25, "#ff0000")}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {yesterday.length !== 0 && 
        <Text style={styles.DayWise}>Yesterday {moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD")}</Text>}

        {yesterday?.map((expenses,index) =>(
          <View style={styles.expensesList} key={index}>
            <Text style={styles.allExpenses}>{expenses?.spend_for}</Text>
            <View style={styles.allMoneyBox}>
              <Text style={styles.allMoney}>{expenses?.spend_amount}₹</Text>
              <View style={styles.deleteBox}>
                <TouchableOpacity style={styles.editIcon} onPress={() => hadleEdit(expenses?._id)}>
                  {Icon("Feather", "edit", 25, "#609CE1")}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(expenses?._id)}>
                  {Icon("AntDesign", "delete", 25, "#ff0000")}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        {total !== 0 && <View style={styles.totalBox}>
          <Text style={styles.totalCount}>Total : {total}₹ </Text>
        </View>}
        </ScrollView>
        
      </Container>
    </SafeAreaView>
  )
}

export default AllExpenses;