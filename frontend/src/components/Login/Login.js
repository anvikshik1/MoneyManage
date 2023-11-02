import { View, Text,TouchableOpacity ,SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import { GlobalStyles } from '../../utils/GlobalStyleSheet';
import { styles } from './LoginStyles';
import { TextInput } from 'react-native-paper';
import { loginData, refreshData } from '../Registration/registrationSlice';
import { useDispatch } from 'react-redux';
import { getLocalData, storeData } from '../../utils/ReuseLogic';

const Login = ({navigation}) => {
  const [showeye, setshoweye] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrongCred, setWrongCred] = useState(false);

  const dispatch = useDispatch();

  const handleIcon = () =>{
    setshoweye(!showeye);
  }

  const handleLogin = async () => {
    const postData = {mobile_no:username, password:password};
    console.log(postData);
    const result =  await dispatch(loginData(postData));
    if(result?.payload?.status === "success"){
      storeData('USER_INFO',JSON.stringify({data: result?.payload}))
      navigation.navigate("HomeScreen");
    }else{
      setWrongCred(true)
    }
  }

  

  
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{justifyContent:'center',alignItems:'center',padding:15,flex:1}}>
          <View style={styles.inputFieldBox}>
              <TextInput 
                mode="outlined"
                label="Mobile Number*"
                outlineStyle={styles.outlineStyle}
                style={styles.inputField}
                placeholderTextColor={'#879FBA'}
                onChangeText={setUsername}
              />
              <TextInput
                mode="outlined"
                outlineStyle={styles.outlineStyle}
                style={styles.inputField}
                label="Password"
                secureTextEntry={showeye}
                onChangeText={setPassword}
                right={<TextInput.Icon icon={showeye? "eye-off":"eye"}  onPress={() => handleIcon()}/>}
              />
              {wrongCred && <Text style={styles.errorMsg}>Incorrect email or password.</Text>}
              <TouchableOpacity style={styles.forgotPassword} onPress={() =>  navigation.navigate("ForgotPassword")}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleLogin()} style={GlobalStyles.customButton}>
            <Text style={GlobalStyles.customButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.orDevider}>
            <Text style={styles.orDeviderText}>Or</Text>
          </View>
          {/* <TouchableOpacity style={styles.fb_login}>
            <Text style={GlobalStyles.customButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.g_login}> 
            <Text style={GlobalStyles.customButtonText}>Google</Text>
          </TouchableOpacity> */}
          <View style={styles.signUpBox}>
            <Text style={styles.newToSignUp}>New to this app?</Text>
            <TouchableOpacity onPress={() =>  navigation.navigate("Registration")}>
              <Text style={styles.SignUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Login