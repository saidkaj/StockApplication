import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import VerticalButtonGroup from '../components/HomeScreen/VerticalButtonGroup';
import HorizontalButtonGroup from '../components/HomeScreen/HorizontalButtonGroup';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleNavigationStock = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <VerticalButtonGroup buttons={['Mal Qəbulu', 'İnvertar']} onPress={handleNavigationStock} />
      <HorizontalButtonGroup buttons={['Upload', 'Download']} />
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
