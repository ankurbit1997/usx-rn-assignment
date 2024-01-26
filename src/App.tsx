import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StockListing from './screens/StockListing';

const App = () => {
  return (
    <SafeAreaProvider>
      <StockListing />
    </SafeAreaProvider>
  );
};

export default App;
