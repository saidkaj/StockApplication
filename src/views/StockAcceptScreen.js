// StockAcceptScreen.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import PersonField from '../components/StockAccept/PersonField';
import StockField from '../components/StockAccept/StockField';
import BarcodeField from '../components/StockAccept/BarcodeField';
import ProductCard from '../components/StockAccept/ProductCard';
import CounterField from '../components/StockAccept/CounterField';
import SubmitButton from '../components/StockAccept/SubmitButton';
import GetFormattedDate from '../components/StockAccept/GetData';

const productData = require('../data.json');

const StockAcceptScreen = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [productCards, setProductCards] = useState([]); // Store the list of product cards
  const [count, setCount] = useState(1);
  const [priceValue, setPriceValue] = useState(0);
  const [productInfo, setProductInfo] = useState({
    barcode: "",
    productName: "",
    Qiymet: 0.0,
    Say: 1,
  });

  const barcodeInputRef = useRef(null);

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
    const newCount = count + value;
    if (newCount >= 0) {
      setCount(newCount);

      // Update the price value when incrementing or decrementing, and set it to 0 if count is 0
      if (newCount === 0) {
        setPriceValue(0.0);
      } else {
        setPriceValue(priceValue + value * productInfo.Qiymet);
      }
    }
  };

  const handleBarcodeChange = (text) => {
    // Update the barcode input value in the state
    setProductInfo((prevState) => ({
      ...prevState,
      barcode: text,
    }));

    if (text === "") {
      // Reset the counter to 0 when the barcode is cleared
      setCount(0);
      setPriceValue(0.0);
      setProductInfo((prevState) => ({
        ...prevState,
        productName: "",
        Qiymet: 0.0,
      }));
    } else {
      const foundProduct = findProductByBarcode(text);
      if (foundProduct) {
        setProductInfo((prevState) => ({
          ...prevState,
          productName: foundProduct.Name,
          Qiymet: foundProduct.InPrice,
        }));
        setCount(1); // Reset the counter to 1
        setPriceValue(foundProduct.Qiymet); // Reset the priceValue to the initial price
      } else {
        // If the product is not found, reset the product name and counter to 0
        setProductInfo((prevState) => ({
          ...prevState,
          productName: "",
          Qiymet: 0.0,
        }));
        setCount(0);
        setPriceValue(0.0);
      }
    }
  };
  const findProductByBarcode = (barcode) => {
    const foundProduct = productData.Item.find((product) => product.Barcode === barcode);
    return foundProduct || null;
  };



  // Existing functions and useEffect

  const handleAddButtonPress = () => {
    // Create a new product card with the current productInfo
    if (productInfo.barcode !== "" && productInfo.productName !== "" && count > 0) {
      const newProductCard = {
        IDmal: productInfo.barcode, // Use IDmal as Product ID
        ProductName: productInfo.productName, // Product name
        Qiymet: productInfo.Qiymet, // Price per item
        Quantity: productInfo.Say,
      };

      // Add the new product card to the existing ones
      setProductCards((prevProductCards) => [...prevProductCards, newProductCard]);

      // Reset the product info and count
      setProductInfo({
        barcode: "",
        productName: "",
        Qiymet: 0.0,
        Say: 1,
      });
      setCount(1);
      setPriceValue(0.0);
    }
  };

  // Render each product card
  const renderItem = ({ item }) => (
    <ProductCard
      barcode={item.IDmal}
      productName={item.ProductName}
      quantity={item.Quantity}
      price={item.Qiymet}
      onEdit={handleEditQuantity}
      onDelete={() => handleDeleteProductCard(item.IDmal)}
    />
  );

  const handleEditQuantity = (barcode, editedQuantity) => {
    setProductCards((prevProductCards) =>
      prevProductCards.map((productCard) =>
        productCard.IDmal === barcode ? { ...productCard, Quantity: editedQuantity } : productCard
      )
    );
  };

  const handleDeleteProductCard = (barcode) => {
    setProductCards((prevProductCards) =>
      prevProductCards.filter((productCard) => productCard.IDmal !== barcode)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.productNameText}>{productInfo.productName}</Text>
        <Text style={styles.date}>{GetFormattedDate()}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <PersonField person={selectedPerson} onPress={handlePersonFieldPress} />
        <StockField stock={selectedStock} onPress={handleStockFieldPress} />
        <BarcodeField inputRef={barcodeInputRef} onChangeText={handleBarcodeChange} />
        {/* FlatList to display the list of product cards */}
        <View style={styles.flatListContainer}>
          <FlatList
            data={productCards}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.productCardsContainer}
            ListEmptyComponent={<Text>No Products Found</Text>}
          />
        </View>

        {/* <View style={styles.countPriceContainer}>

          <Text style={styles.qtyText}>1x</Text>


          <View style={styles.priceField}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceValue}>{priceValue}</Text>
          </View>


          <Text style={styles.currencyText}>AZN</Text>
        </View>

        <CounterField count={count} onIncrement={() => handleIncrement(1)} onDecrement={() => handleIncrement(-1)} /> */}

        {/* Add button to add the current product card */}
        <SubmitButton title="Add" onPress={handleAddButtonPress} />
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
  container2: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  flatListContainer: {
    height: 300,
  },
  date: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  productNameText: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomContainer: {
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
