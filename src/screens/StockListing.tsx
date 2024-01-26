import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from 'react';
import useGetStocks from '../hooks/useGetStocks';
import Loading from './Loading';
import ErrorScreen from './ErrorScreen';
import StockItem from '../components/StockItem';
import InfoFooter from '../components/InfoFooter';
import {
  calculateCurrentValue,
  calculateTodayProfitLoss,
  calculateTotalInvestment,
} from '../utils/helpers';

const StockListing = () => {
  const {data, loading, error} = useGetStocks();

  const currentValue = calculateCurrentValue(data) ?? 0;
  const totalInvestment = calculateTotalInvestment(data) ?? 0;
  const todayProfitLoss = calculateTodayProfitLoss(data) ?? 0;
  const totalProfitLoss = currentValue - totalInvestment;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLabel}>Upstox holding</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data?.userHolding}
          keyExtractor={item => item?.symbol}
          renderItem={({item}) => <StockItem stockData={item} />}
        />
      </View>
      <InfoFooter
        footerData={{
          currentValue,
          totalInvestment,
          todayProfitLoss,
          totalProfitLoss,
        }}
      />
    </View>
  );
};

export default StockListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c2',
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
  },
  headerContainer: {
    padding: 18,
    backgroundColor: '#5a2989',
  },
  headerLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
