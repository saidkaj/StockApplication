// StockAcceptScreen.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import PersonField from '../components/StockAccept/PersonField';
import StockField from '../components/StockAccept/StockField';
import BarcodeField from '../components/StockAccept/BarcodeField';
import ProductCard from '../components/StockAccept/ProductCard';
import CounterField from '../components/StockAccept/CounterField';
import SubmitButton from '../components/StockAccept/SubmitButton';
import GetFormattedDate from '../components/StockAccept/GetData';

const data = {
  "Medaxil": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Mexaric": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Satis": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDPerson": "KM000002",
        "IDAnbar": "MS000001",
        "DocSum": 100.00,
        "Mallar": [
          {
            "IDmal": "KM0000002",
            "Say": 20,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Invertar": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "Yerdeyisme": [
    {
      "doc1": {
        "mdate": "01.01.0001",
        "IDAnbarOUT": "MS000001",
        "IDAnbarIn": "MS000002",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "mdate": "01.01.0001",
        "IDAnbar": "MS000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ],
  "mDest": [
    {
      "doc1": {
        "IDest": "2400000000001",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    },
    {
      "doc2": {
        "IDest": "2400000000002",
        "DocSum": 50.00,
        "Mallar": [
          {
            "IDmal": "KM0000001",
            "Say": 10,
            "Qiymet": 2.50,
            "Cemi": 25.00
          }
        ]
      }
    }
  ]
};

const StockAcceptScreen = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0.0);
  const [count, setCount] = useState(1);
  const [priceValue, setPriceValue] = useState(0.0);
  const [productInfo, setProductInfo] = useState({
    barcode: "",
    productName: "",
    Qiymet: 0.0,
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


  const handleSubmit = () => {
    // Implement submit logic
  };

  useEffect(() => {
    // Fetch the price value for the initial productInfo.barcode (when the barcode is initially entered)
    const foundProduct = findProductByBarcode(productInfo.barcode);
    if (foundProduct) {
      setProductInfo((prevState) => ({
        ...prevState,
        productName: foundProduct.IDmal,
        Qiymet: foundProduct.Qiymet, // Save the product's Qiymet in the state
      }));
      setPriceValue(foundProduct.Qiymet);
    } else {
      setProductInfo((prevState) => ({
        ...prevState,
        productName: "",
        Qiymet: 0.0,
      }));
      setPriceValue(0.0);
    }
  }, [productInfo.barcode]);

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
          productName: foundProduct.IDmal,
          Qiymet: foundProduct.Qiymet,
        }));
        setCount(1); // Reset the counter to 1
        setPriceValue(foundProduct.Qiymet); // Reset the priceValue to the initial price
        setProductQuantity(foundProduct.Say);
        setProductPrice(foundProduct.Qiymet * foundProduct.Say);
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
    // Loop through the JSON data to find the product based on the barcode
    for (const category in data) {
      const products = data[category];
      for (const product of products) {
        for (const docKey in product) {
          const doc = product[docKey];
          for (const mallar of doc.Mallar) {
            if (mallar.IDmal === barcode) {
              return mallar;
            }
          }
        }
      }
    }
    return null; // Return null if the product is not found
  };





  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* {productInfo.productName !== "" && ( */}
        <Text style={styles.productNameText}>{productInfo.productName}</Text>
        {/* )} */}
        <Text style={styles.date}>{GetFormattedDate()}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <PersonField person={selectedPerson} onPress={handlePersonFieldPress} />
        <StockField stock={selectedStock} onPress={handleStockFieldPress} />
        <BarcodeField inputRef={barcodeInputRef} onChangeText={handleBarcodeChange} />
        <ProductCard barcode={productInfo.barcode} productName={productInfo.productName} quantity={productQuantity} price={productPrice} />

        <View style={styles.countPriceContainer}>
          {/* "1x" text on the left */}
          <Text style={styles.qtyText}>1x</Text>

          {/* Number field for price in the center */}
          <View style={styles.priceField}>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.priceValue}>{priceValue}</Text>
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
  container2: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  date: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  productNameText: {
    alignSelf: 'flex-start',
    fontSize: 16,
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
