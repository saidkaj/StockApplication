import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

const BarcodeField = ({ inputRef, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef} // Pass the inputRef here
        style={styles.input}
        placeholder="Scan or enter barcode"
        onChangeText={onChangeText} // Pass the onChangeText function here
        autoCapitalize="none"
        keyboardType="default"
        autoFocus
        onSubmitEditing={Keyboard.dismiss} // Hide the keyboard when pressing the submit button on the keyboard
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: "gray",
  },
  input: {
    // Add your desired styles for the input field
  },
});

export default BarcodeField;
