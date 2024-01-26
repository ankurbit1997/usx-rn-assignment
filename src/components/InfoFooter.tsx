import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InfoFooter = ({
  footerData,
}: {
  footerData: {
    currentValue: number;
    totalInvestment: number;
    todayProfitLoss: number;
    totalProfitLoss: number;
  };
}) => {
  return (
    <View style={style.container}>
      <View style={style.item}>
        <Text style={style.label}>Current Value:</Text>
        <Text style={style.amount}>₹{footerData?.currentValue.toFixed(2)}</Text>
      </View>
      <View style={style.item}>
        <Text style={style.label}>Total Investment:</Text>
        <Text style={style.amount}>
          ₹{footerData?.totalInvestment.toFixed(2)}
        </Text>
      </View>
      <View style={style.item}>
        <Text style={style.label}>Today's Profit and Loss:</Text>
        <Text style={style.amount}>
          ₹{footerData?.todayProfitLoss.toFixed(2)}
        </Text>
      </View>
      <View style={{height: 20}} />
      <View style={style.item}>
        <Text style={style.label}>Profit and Loss:</Text>
        <Text style={style.amount}>
          ₹{footerData?.totalProfitLoss.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default InfoFooter;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 44,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  amount: {
    fontSize: 16,
    color: '#2A2524',
  },
});
