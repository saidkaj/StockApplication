import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const VerticalButtonGroup = ({ buttons, onPress }) => {
  return (
    <View style={styles.centerContainer}>
      {buttons.map((buttonText, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => onPress(buttonText)}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: 160,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VerticalButtonGroup;
