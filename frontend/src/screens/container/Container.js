import { View, Text } from 'react-native'
import React from 'react'

const Container = ({children}) => {
  return (
    <View style={{padding:15}}>
      {children}
    </View>
  )
}

export default Container