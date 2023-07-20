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

  const handlePersonFieldPress = () => {
    // Navigate to PersonSelectionScreen
    const navigation = useNavigation();
    navigation.navigate("Person", {
      onSelectPerson: setSelectedPerson,
    });
  };

  const handleStockFieldPress = () => {
    // Navigate to StockSelectionScreen
  };

  const handleIncrement = () => {
    // Implement increment logic
  };

  const handleDecrement = () => {
    // Implement decrement logic
  };

  const handleSubmit = () => {
    // Implement submit logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>DD.MM.YYYY</Text>

      <View style={styles.bottomContainer}>
        <PersonField person={selectedPerson} onPress={handlePersonFieldPress} />
        <StockField onPress={handleStockFieldPress} />
        <BarcodeField />
        <ProductCard barcode="12345" productName="Sample Product" />

        <View style={styles.countPriceContainer}>
          <CounterField count={1} onIncrement={handleIncrement} onDecrement={handleDecrement} />
          <Text style={styles.price}>Price: 0.0</Text>
        </View>

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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
  },
});

export default StockAcceptScreen;
