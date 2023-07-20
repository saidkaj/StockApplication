import React from 'react';
import { AppRegistry } from 'react-native';
import MainScreen from './src/views/MainScreen';
import PersonSelectionScreen from './src/views/PersonSelectionScreen';
import StockAcceptScreen from './src/views/StockAcceptScreen';
import StockInScreen from './src/views/StockScreen';

AppRegistry.registerComponent('StockApp', () => MainScreen);
AppRegistry.registerComponent('StockApp', () => PersonSelectionScreen);
AppRegistry.registerComponent('StockApp', () => StockAcceptScreen);
AppRegistry.registerComponent('StockApp', () => StockInScreen);