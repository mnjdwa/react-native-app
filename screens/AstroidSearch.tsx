import React, { useState } from 'react'
import { View, TextInput, Text, Alert } from 'react-native'
import styles from '../styles/globals'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {StartRandomSearch, StartSearchAstroid} from '../redux/actions/astroidAction'
import { connect } from 'react-redux'
import {Storetype, Astroid} from '../types/types'

type Props = {
  navigation: {
    navigate: Function
  }
  StartRandomSearch: Function,
  StartSearchAstroid: Function,
  astroid: Astroid
}

const AstroidSearch = ({ navigation, StartRandomSearch }: Props) => {

  const [value, setValue] = useState('')
 
  const handleChange = (text: string) => {
    setValue(text)
  }
  let disabled = true
  if(value.length !== 0){
    disabled = false
    Alert.alert(
      "Enter Id",
      "Id cannot be blank",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  }
  const submit = () => {
    if(value.length === 0){
      disabled = false
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }else {
      StartSearchAstroid(value)
      navigation.navigate('Astroid')
    }
  }
  const RandomSearch = () => {
    StartRandomSearch()
    navigation.navigate('Astroid')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => handleChange(text)} value={value} placeholder="Enter Asteroid ID"/>
      {/* <Button 
        title="Submit" 
        onPress={submit} disabled={disabled} /> */}
        <TouchableOpacity style={styles.buttonPrimary} onPress={submit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondory}  onPress={RandomSearch}>
          <Text style={styles.buttonTextSecondary}>Random Astroid</Text>
        </TouchableOpacity>
    </View>
  )
}
const mapStateToProps = (state: Storetype) => ({
  astroid: state.astroidState.astroid
})
export default connect(mapStateToProps, {StartRandomSearch, StartSearchAstroid})(AstroidSearch)