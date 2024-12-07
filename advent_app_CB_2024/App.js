import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Alert, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');


    useEffect(() => {
      const loadData = async () => {
        const savedName = await AsyncStorage.getItem('name');
        const savedAge = await AsyncStorage.getItem('age');
        const savedAddress = await AsyncStorage.getItem('address');
        if (savedName) setName(savedName);
        if (savedAge) setAge(savedAge);
        if (savedAddress) setAddress(savedAddress);
      };
  
      loadData();
    }, []);
  

const saveData = async () => {
  let valid = true;

  
  if (!/^[a-zA-Z\s]*$/.test(name)) {
    setNameError('Unvalid Name, Ho ho ho what an odd name. Try it again without numbers or special characters');
    valid = false;
  } else {
    setNameError('');
  }

  
  const ageValue = parseInt(age, 10);
  if (isNaN(ageValue) || ageValue < 3 || ageValue > 99) {
    setAgeError('Unvalid Age, We have a strict age policy between 3-99');
    valid = false;
  } else {
    setAgeError('');
  }


  if (!/^[a-zA-Z0-9\s]*$/.test(address)) {
    setAddressError('Unvalid Address, Sorry but Rudolf has a special characters alergy.');
    valid = false;
  } else {
    setAddressError('');
  }

  if (valid) {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('age', age);
    await AsyncStorage.setItem('address', address);
    alert('Hohoho I will make sure to remember this!');
  }
};

  const validateName = (text) => {
    setName(text);
    if (!/^[a-zA-Z\s]*$/.test(text)) {
      setNameError('Ho ho ho what an odd name. Try it again without numbers or special characters');
    } else {
      setNameError('');
    }
  };

  const validateAge = (text) => {
    setAge(text);
    const ageValue = parseInt(text, 10);
    if (text !== '' && (isNaN(ageValue) || ageValue < 3 || ageValue > 99)) {
      setAgeError('We have a strict age policy between 3-99');
    } else {
      setAgeError('');
    }
  };

  const validateAddress = (text) => {
    setAddress(text); 
    if (!/^[a-zA-Z0-9\s]*$/.test(text)) {
      setAddressError('Sorry but Rudolf has a special characters alergy.');
    } else {
      setAddressError('');
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
       // onBlur={validateName}
      /> 
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={validateAge}
        //onBlur={validateAge}
        keyboardType='numeric'
      /> 
      {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Enter your Address"
        value={address}
        onChangeText={validateAddress}
        //onBlur={validateAddress}
      /> 
       {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}
      
      
      <Button 
      title="save" onPress={saveData}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 15,
  },
});
