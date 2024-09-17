import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './App.css';

function App() {

  const [price, setPrice] = useState('');
  const finalDate = '2024-09-19'

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const apiKey = 'K19XJL3QDECB6T14';
        const symbol = 'ZS'; // Zscaler stock symbol
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
        
        const response = await axios.get(url);
        const stockData = response.data['Global Quote'];
        const price = parseFloat(stockData['04. low']).toFixed(2);
        
        setPrice(price);
      } catch (error) {
        console.error('Error fetching stock price:', error);
      }
    };

    fetchStockPrice();
  }, []);

  function countTimeLeft(): string {
    const targetDate: Date = new Date(finalDate);
    const currentDate: Date = new Date();
    let months: number = targetDate.getMonth() - currentDate.getMonth();
    let days: number = targetDate.getDate() - currentDate.getDate();

    if (days < 0) {
        const prevMonthLastDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
        days += prevMonthLastDay;
        months--;
    }

    let result: string = "";
    if (months > 0) {
        result = `${months} month${months > 1 ? 's' : ''} `;
    }
    if (days > 0) {
        result += `${days} day${days > 1 ? 's' : ''}`;
    }
    if (result) {
      result += " Left";
    } else {
      result = "ಲಕ್ಷ್ಮೀ ಬಾರಮ್ಮ";
    }

    return result.trim();
  }

  function countDays(): number {
    const targetDate: Date = new Date(finalDate);
    const currentDate: Date = new Date();
    currentDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    const differenceMs = targetDate.getTime() - currentDate.getTime();

    const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  return (
    <>
    <Helmet>
      <title>ZRSU</title>
    </Helmet>
    <div className="App">
      <header className="App-header">
        <p>{price}</p>
        <p>{countTimeLeft()}</p>
        <p>{countDays()}</p>
      </header>
    </div>
    </>
  );
}

export default App;
