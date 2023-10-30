import { View, Text,TouchableOpacity ,SafeAreaView} from 'react-native'
import React,{useState} from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import { styles } from './RegistrationStyles'
import { TextInput } from 'react-native-paper';
import { registrationData } from './registrationSlice'
import { useDispatch } from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

const Registration = ({navigation}) => {
  const [showeye, setshoweye] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [matchPasswd, setMatchPasswd] = useState(false);

  const dispatch = useDispatch();

  const {control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});

  const onSubmit = async (data) => {
    if(data?.password === data?.confirm_password){
      setMatchPasswd(false);
      const postData = {mobile_no:data?.mobile_no, password:data?.password};
      console.log("data",postData);
      const result =  await dispatch(registrationData(postData));
      console.log("result",result?.payload);
      if(result?.payload?.status === "success"){
        navigation.navigate("Login")
      }
    }else{
      setMatchPasswd(true)
    }
}


  const handleIcon = () =>{
    setshoweye(!showeye)
  }
 
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      {registration?
      <View style={{justifyContent:'center',alignItems:'center',padding:15,flex:1}}>
        <View>
        </View>
          <View style={styles.inputFieldBox}>
            <Controller
                control={control}        
                name="mobile_no"      
                rules={{
                    required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}            
                    onBlur={onBlur}       
                    mode="outlined"
                    label="Mobile Number*" 
                    outlineStyle={styles.outlineStyle}   
                    style={styles.inputField}
                    onChangeText={value => onChange(value)}
                    placeholderTextColor={'#879FBA'}
                />
                )}  
            />
            {errors.mobile_no && <Text style={styles.errorMsg}>This field is required!</Text>}

            <Controller
                control={control}        
                name="password"      
                rules={{
                    required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}            
                    onBlur={onBlur}       
                    mode="outlined"
                    outlineStyle={styles.outlineStyle}
                    style={styles.inputField}
                    label="Password"
                    secureTextEntry={showeye}
                    right={<TextInput.Icon icon={showeye? "eye-off":"eye"}  onPress={() => handleIcon()}/>}
                    onChangeText={value => onChange(value)}
                    placeholderTextColor={'#879FBA'}
                />
                )}  
            />
            {errors.password && <Text style={styles.errorMsg}>This field is required!</Text>}

            
            <Controller
                control={control}        
                name="confirm_password"      
                // defaultValue={userdata?.summary}  
                rules={{
                    required: true,
                }}  
                render={({field: {onChange, value, onBlur}}) => (
                <TextInput
                    value={value}            
                    onBlur={onBlur}       
                    mode="outlined"
                    outlineStyle={styles.outlineStyle}
                    style={styles.inputField}
                    label="confirm password"
                    secureTextEntry={showeye}
                    onChangeText={value => onChange(value)}
                    placeholderTextColor={'#879FBA'}
                />
                )}  
            />
            {errors.confirm_password && <Text style={styles.errorMsg}>This field is required!</Text>}
            {matchPasswd && <Text style={styles.errorMsg}>Passwords do NOT match!</Text>}

          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={GlobalStyles.customButton}>
            <Text style={GlobalStyles.customButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signUpBox}>
            <Text style={styles.newToSignUp}>Already have an account?</Text>
            <TouchableOpacity onPress={() =>  navigation.navigate("Login")}>
              <Text style={styles.SignUpText}>Sign In</Text>
            </TouchableOpacity>
          </View>
      </View>
      :
      <View style={{justifyContent:'center',alignItems:'center',padding:15,flex:1}}>
        <TouchableOpacity style={styles.showRegistration} onPress={() => setRegistration(true)}>
          <Text style={styles.registrationText} >Click to Register</Text>
        </TouchableOpacity>
      </View>
      }
      
    </SafeAreaView>
  )
}

export default Registration