import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddToStockButton from '../components/StockScreen/AddToStockButton';

const StockInScreen = () => {
  const handleAddButtonPress = () => {
    // Implement the action when the "+" button is pressed
    // For example, navigate to the "Add Stock In" screen.
    console.log('Add button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Your stock in content */}
      <Text style={styles.text}>Stock In Screen</Text>

      {/* Floating Action Button */}
      <AddToStockButton onPress={handleAddButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default StockInScreen;
