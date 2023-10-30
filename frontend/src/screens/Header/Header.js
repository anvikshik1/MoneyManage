import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../utils/GlobalStyleSheet'

const Header = ({children}) => {
  return (
    <View style={GlobalStyles.HeaderContainer}>
      {children}
    </View>
  )
}

export default Header