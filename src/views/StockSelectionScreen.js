import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const stocksData = require('../data.json');

const StockSelectionScreen = ({ navigation, route }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // You don't need the API fetch here since you have the data in `personsData`
    const stockNames = stocksData.Stocks.map((stock) => stock.StockName);
    setStocks(stockNames);
  }, []);

  const handleSelectStock = (stock) => {
    const { onSelectStock } = route.params;
    onSelectStock(stock);
    navigation.goBack();
  };

  const renderStockItem = ({ item }) => (
    <TouchableOpacity
      style={styles.stockItem}
      onPress={() => handleSelectStock(item)}
    >
      <Text style={styles.stockText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Stock</Text>
      <FlatList
        data={stocks}
        renderItem={renderStockItem}
        keyExtractor={(item) => item}
      />
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
