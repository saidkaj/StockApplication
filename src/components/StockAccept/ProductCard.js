// ProductCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ barcode, productName, quantity, price }) => {
  return (
    <View style={styles.productCard}>
      <Text style={styles.productLabel}>Product Barcode:</Text>
      <Text style={styles.productValue}>{barcode}</Text>

      <Text style={styles.productLabel}>Product Name:</Text>
      <Text style={styles.productValue}>{productName}</Text>

      <Text style={styles.productLabel}>Quantity:</Text>
      <Text style={styles.productValue}>{quantity}</Text>

      <Text style={styles.productLabel}>Price:</Text>
      <Text style={styles.productValue}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  productLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productValue: {
    marginBottom: 10,
  },
});

export default ProductCard;
