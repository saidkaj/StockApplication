import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const personsData = require('../data.json');

const PersonSelectionScreen = ({ navigation, route }) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // You don't need the API fetch here since you have the data in `personsData`
    const personNames = personsData.Persons.map((person) => person.PersonName);
    setPersons(personNames);
  }, []);

  const handleSelectPerson = (person) => {
    const { onSelectPerson } = route.params;
    onSelectPerson(person);
    navigation.goBack();
  };

  const renderPersonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.personItem}
      onPress={() => handleSelectPerson(item)}
    >
      <Text style={styles.personText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Person</Text>
      <FlatList
        data={persons}
        renderItem={renderPersonItem}
        keyExtractor={(item) => item}
      />
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
