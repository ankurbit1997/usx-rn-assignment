import {useEffect, useState} from 'react';
import {PortfolioData} from '../types';
import {API_URL} from '@env';

const useGetStocks = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, error};
};

export default useGetStocks;
