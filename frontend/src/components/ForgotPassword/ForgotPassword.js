import { View, Text,TouchableOpacity ,SafeAreaView} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import { styles } from './ForgotPasswordStyles'
import { TextInput } from 'react-native-paper';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <View style={{justifyContent:'center',alignItems:'center',padding:15,flex:1}}>
        <View>
          <Text style={GlobalStyles.titleBlue}>Forgot Password</Text>
        </View>
        <View style={styles.inputFieldBox}>
          <TextInput 
            mode="outlined"
            label="Mobile Number*"
            outlineStyle={styles.outlineStyle}
            style={styles.inputField}
            placeholderTextColor={'#879FBA'}
          />
        </View>
        <TouchableOpacity onPress={() =>  navigation.navigate("OTPVerify")} style={GlobalStyles.customButton}>
          <Text style={GlobalStyles.customButtonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword