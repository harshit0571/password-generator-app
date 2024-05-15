import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const passwordSchema=Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'should be min of 4 characters')
  .max(16, 'should be max of 16 characters')
  .required('length is required')
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})