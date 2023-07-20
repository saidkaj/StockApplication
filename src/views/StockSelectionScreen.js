// StockSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StockSelectionScreen = ({ navigation, onSelectStock }) => {
  // Sample stock list (you can replace it with your actual data)
  const [stocks] = useState(['Stock 1', 'Stock 2', 'Stock 3']);

  const handleSelectStock = (stock) => {
    // Return to the StockAcceptScreen with the selected stock
    onSelectStock(stock);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Stock</Text>
      {stocks.map((stock) => (
        <TouchableOpacity
          key={stock}
          style={styles.stockItem}
          onPress={() => handleSelectStock(stock)}
        >
          <Text style={styles.stockText}>{stock}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stockItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stockText: {
    fontSize: 18,
  },
});

export default StockSelectionScreen;
