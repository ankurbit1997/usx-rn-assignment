import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Holding} from '../types';

const StockItem = ({stockData}: {stockData: Holding}) => {
  const itemPNL =
    stockData.quantity * stockData.ltp -
    stockData.avgPrice * stockData.quantity;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <Text style={[styles.textBold, {textTransform: 'uppercase'}]}>
          {stockData?.symbol}
        </Text>
        <Text>
          <Text style={styles.textlight}>LTP:</Text>{' '}
          <Text style={styles.textBold}>₹ {stockData?.ltp.toFixed(2)}</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textlight}>{stockData?.quantity}</Text>
        <Text>
          <Text style={styles.textlight}>P/L:</Text>{' '}
          <Text style={styles.textBold}>₹ {itemPNL.toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#c0c0c280',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  textBold: {
    fontWeight: '600',
    color: 'black',
  },
  textlight: {
    color: 'black',
  },
});
