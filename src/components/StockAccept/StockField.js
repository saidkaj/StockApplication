// StockField.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const StockField = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.fieldContainer} onPress={onPress}>
      <Text style={styles.fieldLabel}>Stock:</Text>
      {/* Display selected stock here */}
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
});

export default StockField;
