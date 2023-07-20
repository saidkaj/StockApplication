// PersonSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PersonSelectionScreen = ({ navigation, onSelectPerson }) => {
  // Sample person list (you can replace it with your actual data)
  const [persons] = useState(['Person 1', 'Person 2', 'Person 3']);

  const handleSelectPerson = (person) => {
    // Return to the StockAcceptScreen with the selected person
    onSelectPerson(person);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Person</Text>
      {persons.map((person) => (
        <TouchableOpacity
          key={person}
          style={styles.personItem}
          onPress={() => handleSelectPerson(person)}
        >
          <Text style={styles.personText}>{person}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  personItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  personText: {
    fontSize: 18,
  },
});

export default PersonSelectionScreen;
