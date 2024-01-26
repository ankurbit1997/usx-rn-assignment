import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Something went wrong!</Text>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
