// ProductCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ barcode, productName, quantity, price }) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.productCard1}>

        <Text style={styles.productValue}>{barcode}</Text>

        <Text style={styles.productLabel}>Price:</Text>
        <Text style={styles.productValue}>{price}</Text>
        {/* <Text style={styles.productValue}>{productName}</Text> */}
      </View>

      <View style={styles.productCard1}>
        <Text style={styles.productValue}>{productName}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    height: 100,
    justifyContent: "center"
  },
  productCard1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  productValue: {
    marginBottom: 10,
    fontSize: 14,
  },
});

export default ProductCard;
