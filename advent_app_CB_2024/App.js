import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, Alert, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';

export default function App() {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [list, setList] = useState([]); 


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

  const STORAGE_KEY = '@wish_list';

  // Liste speichern
  const saveListToStorage = async (listToSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listToSave));
  };
  
  //Liste laden
  const loadListFromStorage = async () => {
    const savedList = await AsyncStorage.getItem(STORAGE_KEY);
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  };
  

  // Beim Start Liste laden
  useEffect(() => {
    loadListFromStorage();
  }, []);


// Neues Wunsch-Item hinzufügen
const handleAddToList = () => {
  const updatedList = [...list, { text: '', isEditing: true, isChecked: false }]; 
  setList(updatedList);
  saveListToStorage(updatedList);
};

// Wunsch in den Bearbeitungsmodus setzen
const handleEditWish = (index) => {
  const updatedList = [...list]; 
  updatedList[index].isEditing = true; 
  setList(updatedList);
};

// Wunsch speichern
const handleSaveWish = (index) => {
  const updatedList = [...list];
  updatedList[index].isEditing = false; 
  setList(updatedList);
  saveListToStorage(updatedList);
};

// Änderungen am Wunsch-Text verarbeiten
const handleWishChange = (index, text) => {
  const updatedList = [...list]; 
  updatedList[index].text = text; 
  setList(updatedList);
};

//Wunsch entfernen
const handleDeleteWish = (index) => {
  const updatedList = list.filter((_, i) => i !== index); 
  setList(updatedList); 
  saveListToStorage(updatedList);
};
  
const toggleCheck = (index) => {
  const updatedList = [...list];
  updatedList[index].isChecked = !updatedList[index].isChecked;
  setList(updatedList);
  saveListToStorage(updatedList);
};


  return (
    <View style={styles.container}>
      <Text style={styles.label}> Please enter your personal information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={validateName}
      /> 
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Enter your Age"
        value={age}
        onChangeText={validateAge}
        keyboardType='numeric'
      /> 
      {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Enter your Address"
        value={address}
        onChangeText={validateAddress}
      /> 
       {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}
      
      
      <Button 
      title="save" onPress={saveData}
      ></Button>
      <StatusBar style="auto" />


      <Text style={styles.listTitle}>Wish Liste:</Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Checkbox
              status={item.isChecked ? 'checked' : 'unchecked'}
              onPress={() => toggleCheck(index)}
            />
            {item.isEditing ? ( 
              <TextInput
                style={styles.input}
                placeholder="Enter your wish"
                value={item.text} 
                onChangeText={(text) => handleWishChange(index, text)} 
              />
            ) : (
              <Text style={[styles.text, item.isChecked && styles.strikeThroughText,]}>{`${index + 1}. ${item.text}`}</Text> 
            )}
            <View style={{ flexDirection: 'row', marginRight: 10}}>
            <Button
              title={item.isEditing ? 'Save' : 'Edit'} 
              onPress={() =>
                item.isEditing ? handleSaveWish(index) : handleEditWish(index) 
              }
            />
            </View>
            <View style={{ flexDirection: 'row', marginRight: 10}}>
            <Button 
            title='Delete'
            onPress={() => handleDeleteWish(index)}
            />
            </View>
          </View>
        )}
      />


      <Button 
      title="Add" onPress={handleAddToList}
      ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    marginBottom: 20, 
    marginTop: 20,
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: "bold", 
    marginBottom: 15,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
  strikeThroughText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

});
