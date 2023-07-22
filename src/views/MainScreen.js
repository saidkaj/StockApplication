import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { decode as atob, encode as btoa } from 'base-64';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import VerticalButtonGroup from '../components/HomeScreen/VerticalButtonGroup';
import HorizontalButtonGroup from '../components/HomeScreen/HorizontalButtonGroup';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleNavigationStock = (screenName) => {
    navigation.navigate(screenName);

  };

  const PersonData = () => {
    const userData = {
      typReport: 'Catalogs',
      Usr: { Name: 'Admin' },
    };

    return axios
      .post('http://46.32.169.71/DEMO/hs/MobileApi/Connect/', userData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('sa:abc'),
        },
      })
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const handleDownloadData = async () => {
    try {
      const data = await PersonData();

      if (data) {
        // Save the data to the project directory
        const fileName = 'data.json';
        const directoryUri = FileSystem.documentDirectory + fileName;
        await FileSystem.writeAsStringAsync(directoryUri, JSON.stringify(data));

        // Show an alert or perform any other action indicating success
        console.log('Data downloaded and saved successfully!');
      } else {
        // Handle the case when data retrieval fails
        console.log('Failed to download data.');
      }
    } catch (error) {
      // Handle any unexpected errors
      console.log('An error occurred:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Vertical buttons */}
      <VerticalButtonGroup
        buttons={['Mal Qəbulu', 'İnvertar']}
        onPress={handleNavigationStock}
      />
      {/* Horizontal buttons */}
      <HorizontalButtonGroup buttons={['Upload', 'Download']} onPress={handleDownloadData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MainScreen;
