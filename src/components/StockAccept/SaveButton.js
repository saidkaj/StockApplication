// SubmitButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SaveButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    saveButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,

    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default SaveButton;
