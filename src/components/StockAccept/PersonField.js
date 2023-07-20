// PersonField.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const PersonField = ({ person, onPress }) => {
  return (
    <TouchableOpacity style={styles.fieldContainer} onPress={onPress}>
      <Text style={styles.fieldLabel}>Person:</Text>
      <Text style={styles.fieldValue}>{person || 'Select a person'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  fieldLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  fieldValue: {
    flex: 1,
    fontSize: 18,
  },
});

export default PersonField;
