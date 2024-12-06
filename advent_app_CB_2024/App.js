import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Alert, TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const validateName = (text) => {
    const regex = /^[a-zA-Z\s]*$/; 
    if (regex.test(text)) {
      setName(text);
    } else {
      Alert.alert('Unvalid Name', 'Ho ho ho what an odd name. Try it again without numbers or special characters');
    }
  };

  const validateAge = (text) => {
    const regex = /^[1-9][0-9]?$/; 
    if (regex.test(text) || text === '') {
      setAge(text);
    } else {
      Alert.alert('Unvalid Age', 'We have a strict age policy between 1-99');
    }
  };

  const validateAddress = (text) => {
    const regex = /^[a-zA-Z0-9\s]*$/; 
    if (regex.test(text)) {
      setAddress(text);
    } else {
      Alert.alert('Unvalid Address', 'Sorry but Rudolf has a special characters alergy.');
    }
  };


  return (
    <View style={styles.container}>
      <Text> Please enter your personal information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={validateName}
      /> 

      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={validateAge}
        keyboardType='numeric'
      /> 
      <TextInput
        style={styles.input}
        placeholder="Enter your Address"
        value={address}
        onChangeText={validateAddress}
      /> 
      
      
      <Button 
      title="Click Me"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  
});
