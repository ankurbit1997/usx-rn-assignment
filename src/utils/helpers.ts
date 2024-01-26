import {PortfolioData} from '../types';

export const calculateCurrentValue = (data: PortfolioData | null) => {
  if (data) {
    return data?.userHolding.reduce(
      (acc, item) => item.ltp * item.quantity + acc,
      0,
    );
  }
};

export const calculateTotalInvestment = (data: PortfolioData | null) => {
  if (data) {
    return data?.userHolding.reduce(
      (acc, item) => item.avgPrice * item.quantity + acc,
      0,
    );
  }
};

export const calculateTodayProfitLoss = (data: PortfolioData | null) => {
  //couldnt figure out `close` from the dataset

  if (data) {
    return data.userHolding.reduce((acc, item) => {
      const profitLoss = item.ltp + item.quantity;
      return acc + profitLoss;
    }, 0);
  }
};
