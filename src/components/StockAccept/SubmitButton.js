// SubmitButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,

  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SubmitButton;
