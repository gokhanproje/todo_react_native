import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const CustomAlert  = () => {
  const [inputText, setInputText] = useState('');

  const handleRename = () => {
    // Implement rename logic here, e.g., save inputText to state or perform an action
    Alert.alert('Rename', `Renaming with input: ${inputText}`);
  };

  const handleDelete = () => {
    // Implement delete logic here, e.g., delete item or perform an action
    Alert.alert('Delete', 'Item deleted');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Enter new name"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.renameButton} onPress={handleRename}>
          <Text>Rename</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  renameButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  deleteText: {
    color: 'red',
  },
});

export default CustomAlert ;
