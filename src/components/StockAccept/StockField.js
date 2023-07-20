// StockField.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const StockField = ({ stock, onPress }) => {
  return (
    <TouchableOpacity style={styles.fieldContainer} onPress={onPress}>
      <Text style={styles.fieldLabel}>Stock:</Text>
      <Text style={styles.fieldValue}>{stock || 'Select a stock'}</Text>
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

export default StockField;
