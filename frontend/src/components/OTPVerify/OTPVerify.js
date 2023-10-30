import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import OTPTextView from 'react-native-otp-textinput';
import { styles } from './OTPVerifyStyle';

const OTPVerify = ({navigation}) => {
    const [otpInput, setotpInput ] = useState('');
    const [counter, setCounter] = useState(30);
    console.log(otpInput);

    const resendUserOtp = async() =>{ 
        // setLoader(true);
        setCounter(30)
        // const result = await dispatch(resendOTP({email:email, mobile_no:mobile_no}));
        // Toast.show(result.payload.message,Toast.LONG);
     }

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    },[counter]);
    
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
        <View style={{justifyContent:'center',alignItems:'center',padding:15,flex:1}}>
            <Text>OTPVerify</Text>
            <OTPTextView 
                handleTextChange={(text) => setotpInput(text)}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                autoComplete="sms-otp"
                inputCount={4}
            />
            <TouchableOpacity onPress={() =>  navigation.navigate("OTPVerify")} style={GlobalStyles.customButton}>
                <Text style={GlobalStyles.customButtonText}>OTP Verify</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => resendUserOtp()} disabled={counter == 0 ? false: true}>
                <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}}>
                    {counter == 0? "Resend OTP" : `Resend in ${counter}s`}
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default OTPVerify;