import { View, Text ,Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    expensesList:{
        borderBottomWidth:1,
        borderStyle:'dashed',
        borderColor:'#609CE1',
        paddingVertical:15,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        
    },
    header:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:5,
        position:'relative'
    },
    allMoneyBox:{
        flexDirection:'row',
        width:170,
        justifyContent:'space-between',
        alignItems:'center',
        height:'100%'
    },
    allExpenses:{
        fontFamily:'DotsAllForNow',
        fontSize:15,
        width:Dimensions.get('window').width/2.5,
        color:'#091D34'
    },
    allMoney:{
        fontFamily:'DotsAllForNow',
        color:'#091D34'
    },
    deleteBox:{
        flexDirection:'row',
    },
    editIcon:{
        marginRight:25
    },
    totalBox:{
        flexDirection:'row',
        paddingVertical:10
    },
    totalCount:{
        fontFamily:'DotsAllForNow',
        fontSize:20,
        color:'#091D34'
    }

})
