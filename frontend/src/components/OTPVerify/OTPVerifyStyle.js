import { View, Text ,Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
   borderBottomWidth:1,
  
   backgroundColor:"white",
   borderColor:"red!importanat",
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '60%',
    
  },
  textInput: {
    height: 40,
    width: '60%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  }

})