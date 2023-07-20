// CounterField.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CounterField = ({ count, onIncrement, onDecrement }) => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={onDecrement} style={styles.counterButton}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={styles.counterValueContainer}>
        <Text style={styles.counterValue}>{count}</Text>
      </View>
      <TouchableOpacity onPress={onIncrement} style={styles.counterButton}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  counterButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  counterValueContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  counterValue: {
    fontSize: 18,
  },
});

export default CounterField;
