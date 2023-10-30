import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import Calculation from '../components/Calculations/Calculation';
import { StyleSheet } from 'react-native'
import { Icon } from '../utils/ReuseLogic';
import ExpensesScreens from '../screens/NavigationScreens/ExpensesScreens';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={styles}>
      <Tab.Screen name="Expenses" component={ExpensesScreens} 
      options={() => ({
        tabBarIcon: ({focused}) => (Icon('AntDesign','wallet',30, focused ? '#609CE1' :"#E1ECF9")),
      })} 
    />
      <Tab.Screen name="Calculation" component={Calculation} 
      options={() => ({
        tabBarIcon: ({focused}) => (Icon('AntDesign','calculator',30, focused ? '#609CE1' :"#E1ECF9")),
      })} />
    </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({
    headerShown: false,
    tabBarShowLabel: true,
    tabBarStyle: {
        backgroundColor: '#091D34',
        height:80,
        position:'absolute',
        bottom:15,
        borderRadius:10,
        left:15,
        right:15,
        shadowColor:"#133863",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom:10,
        fontFamily:'DotsAllForNow',
        fontWeight:400
    },
    tabBarInactiveTintColor: '#E1ECF9',
    tabBarActiveTintColor: '#609CE1',
})