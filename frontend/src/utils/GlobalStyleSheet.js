import { View, Dimensions , StyleSheet} from 'react-native'

export const GlobalStyles = StyleSheet.create({
    safeAreaView:{
        backgroundColor:"#E1ECF9",
        flex:1,
    },
    
    customButton:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:50,
        backgroundColor:'#133863',
        marginBottom:10,
        shadowColor:"#236AB9",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        width:'100%'
    },
    customButtonText:{
        color:'#E1ECF9',
        fontFamily:'DotsAllForNow',
        fontSize:17
    },
    
    title:{
        fontFamily:'DotsAllForNow', 
        fontSize:18,
        color:'#091D34'
    },
    titleBlue:{
        fontFamily:'DotsAllForNow', 
        fontSize:18,
        color:'#091D34'
    },
    
    rightButton:{
        width: Dimensions.get('window').width/3.5,
        paddingVertical:10,
        borderRadius:10,
        alignItems:'center',
        backgroundColor:'#236AB9',
        borderWidth:2,
        borderColor:"#236AB9"
    },

    leftButton:{
        width: Dimensions.get('window').width/3.5,
        paddingVertical:10,
        borderRadius:10,
        alignItems:'center',
        borderWidth:2,
        borderColor:"#236AB9"
    },
    leftButtonsText:{
        color:'#236AB9',
        fontFamily:"DotsAllForNow",
    },
    rightButtonsText:{
        color:'#ffffff',
        fontFamily:"DotsAllForNow",
    },
    HeaderContainer:{
       backgroundColor:'#236AB9',
       paddingHorizontal:15,
       height:55,
    }
})