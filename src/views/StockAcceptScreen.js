// StockAcceptScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import PersonField from '../components/StockAccept/PersonField';
import StockField from '../components/StockAccept/StockField';
import BarcodeField from '../components/StockAccept/BarcodeField';
import ProductCard from '../components/StockAccept/ProductCard';
import CounterField from '../components/StockAccept/CounterField';
import SubmitButton from '../components/StockAccept/SubmitButton';

const StockAcceptScreen = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [count, setCount] = useState(1);

  const navigation = useNavigation();

  const handlePersonFieldPress = () => {
    // Navigate to PersonSelectionScreen
    navigation.navigate("Person Selection", {
      onSelectPerson: setSelectedPerson,
    });
  };

  const handleStockFieldPress = () => {

    navigation.navigate('Stock Selection', {
      onSelectStock: setSelectedStock,
    });
  };

  const handleIncrement = (value) => {
    // Increment or decrement the count based on the value (1 for increment, -1 for decrement)
    const newCount = count + value;
    if (newCount >= 0) {
      setCount(newCount);
    }
  };


  const handleSubmit = () => {
    // Implement submit logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>DD.MM.YYYY</Text>

      <View style={styles.bottomContainer}>
        <PersonField person={selectedPerson} onPress={handlePersonFieldPress} />
        <StockField stock={selectedStock} onPress={handleStockFieldPress} />
        <BarcodeField />
        <ProductCard barcode="12345" productName="Sample Product" />

        <View style={styles.countPriceContainer}>
          {/* "1x" text on the left */}
          <Text style={styles.qtyText}>1x</Text>
          
          {/* Number field for price in the center */}
          <View style={styles.priceField}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceValue}>0.0</Text>
          </View>

          {/* "AZN" text on the right */}
          <Text style={styles.currencyText}>AZN</Text>
        </View>


        <CounterField count={count} onIncrement={() => handleIncrement(1)} onDecrement={() => handleIncrement(-1)} />


        <SubmitButton onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 16,
    marginBottom: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  countPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the items horizontally
    alignItems: 'center',
    marginBottom: 20,
  },
  qtyText: {
    fontSize: 18,
    marginRight: 10,
  },
  priceField: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Take all available space in the center
  },
  priceText: {
    fontSize: 18,
    marginRight: 5,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default StockAcceptScreen;
