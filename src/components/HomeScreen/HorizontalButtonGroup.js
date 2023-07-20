import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HorizontalButtonGroup = ({ buttons }) => {
  return (
    <View style={styles.bottomContainer}>
      {buttons.map((buttonText, index) => (
        <TouchableOpacity key={index} style={styles.horizontalButton}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  horizontalButton: {
    flex: 1,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HorizontalButtonGroup;
