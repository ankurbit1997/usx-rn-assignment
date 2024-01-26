export interface Holding {
    symbol: string;
    quantity: number;
    ltp: number;
    avgPrice: number;
  }
  
  export interface PortfolioData {
    userHolding: Holding[];
  }