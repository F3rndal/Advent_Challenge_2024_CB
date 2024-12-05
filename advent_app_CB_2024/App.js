import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');

  return (
    <View style={styles.container}>
      <Text> Please enter your personal information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      /> 

      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      /> 
      <TextInput
        style={styles.input}
        placeholder="Enter your Adress"
        value={adress}
        onChangeText={(text) => setAdress(text)}
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
