// ProductCard.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

const ProductCard = ({ barcode, productName, quantity, price, onEdit, onDelete }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedQuantity, setEditedQuantity] = useState(quantity.toString());

  const handleEditButtonPress = () => {
    setModalVisible(true);
    setEditedQuantity(quantity.toString());
  };

  const handleDeleteButtonPress = () => {
    onDelete();
  };

  const handleMinusButtonPress = () => {
    const newQuantity = parseInt(editedQuantity) - 1;
    setEditedQuantity(Math.max(newQuantity, 0).toString());
  };

  const handlePlusButtonPress = () => {
    const newQuantity = parseInt(editedQuantity) + 1;
    setEditedQuantity(newQuantity.toString());
  };

  const handleSaveButtonPress = () => {
    onEdit(barcode, parseInt(editedQuantity));
    setModalVisible(false);
  };;

  const handleCloseButtonPress = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setEditedQuantity(quantity.toString());
  }, [quantity]);

  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.barcode}>{barcode}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>Quantity: {quantity}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditButtonPress}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteButtonPress}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Edit Modal */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseButtonPress}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View style={styles.editQuantityContainer}>
              <TouchableOpacity style={styles.minusButton} onPress={handleMinusButtonPress}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.quantityInput}
                value={editedQuantity}
                onChangeText={setEditedQuantity}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.plusButton} onPress={handlePlusButtonPress}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveButtonPress}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  barcode: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityText: {
    fontSize: 14,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    height: 200,
    width: 250,
    justifyContent: "center"
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 6,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  minusButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  plusButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
    minWidth: 100,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});

export default ProductCard;
