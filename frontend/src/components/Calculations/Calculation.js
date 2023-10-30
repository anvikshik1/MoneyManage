import { Text, SafeAreaView,TouchableOpacity,View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'
import Container from '../../screens/container/Container'
import { TextInput } from 'react-native-paper'
import { styles } from './CalculationStyles'


const Calculation = () => {
  const [inputs, setInputs] = useState("");

  // const handleAddInput = () => {
  //   setInputs([...inputs, ""]);
  // }

  // const handleIngredientChange = (event, index) => {
  //   const { value } = event.target;
  //   const data = [...inputs];
  //   data[index] = value;
  //   setInputs({ ...inputs, data });
  // };

  console.log(inputs);
  return (
    <SafeAreaView style={GlobalStyles.safeAreaView}>
      <Container>
          {/* {inputs.map((data,index) => {
            return(
              <TextInput 
                key={index}
                mode="outlined"
                outlineStyle={styles.outlineStyle}
                style={styles.inputField}
                value={data}
                placeholderTextColor={'#879FBA'}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            )
          })} */}
        <TouchableOpacity onPress={() => handleAddInput(1)} style={GlobalStyles.customButton}>
          <Text style={GlobalStyles.customButtonText}>Add Frield</Text>
        </TouchableOpacity>
      </Container>
      
    </SafeAreaView>
  )
}

export default Calculation