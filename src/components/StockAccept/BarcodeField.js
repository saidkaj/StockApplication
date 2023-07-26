import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet, Keyboard, autoFocus } from 'react-native';

const BarcodeField = ({ inputRef, onChangeText, editable = true }) => {

  // useEffect(() => {
  //   // If autoFocus prop is true, focus the input when the component mounts
  //   if (autoFocus && inputRef && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [autoFocus]);

  const handleReturnKeyPress = () => {
    Keyboard.dismiss(); // Hide the keyboard when the "Return" key is pressed
  };


  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef} // Pass the inputRef here
        style={styles.input}
        placeholder="Scan or enter barcode"
        onChangeText={onChangeText} // Pass the onChangeText function here
        autoCapitalize="none"
        keyboardType="numeric"
        onSubmitEditing={handleReturnKeyPress} // Hide the keyboard when pressing the submit button on the keyboard
        editable={editable}
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
