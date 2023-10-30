import { View, Text ,Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    inputField:{
        borderRadius:10,
        borderColor:'#133863',
        marginVertical:10,
        color:'#091D34',
        backgroundColor:"#E1ECF9",
    },
    outlineStyle:{
        borderRadius:10,
        borderWidth:2,
    },
    inputFieldBox:{
        paddingVertical:10,
        width:'100%'
    },
    signUpBox:{
        marginTop:25,
        flexDirection:'row',
    },
    newToSignUp:{
        color:'#091D34',
        fontFamily:"DotsAllForNow",
        fontSize:13
    },
    SignUpText:{
        color:'#236AB9',
        fontFamily:"DotsAllForNow",
        marginLeft:5,
        fontSize:13
    }
})