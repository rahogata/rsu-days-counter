import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { DefaultApi } from 'finnhub-ts'
import './App.css';

function App() {

  const [price, setPrice] = useState('');
  const finalDate = '2024-09-17';

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const finnhubClient = new DefaultApi({
          apiKey: 'crq4s6hr01qutsn3dfh0crq4s6hr01qutsn3dfhg',
          isJsonMime: (input) => {
            try {
              JSON.parse(input)
              return true
            } catch (error) {}
            return false
          },
        })
        finnhubClient.quote('ZS').then((res) => {
          setPrice(res.data.c?.toFixed(2) || '');
        }, (err) => console.error('Error fetching stock price:', err));
      } catch (error) {
        console.error('Error fetching stock price:', error);
      }
    };

    fetchStockPrice();
  }, []);

  function getMonthsBetweenDates(date1: Date, date2: Date) {
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    let yearDiff = year2 - year1;
    let monthDiff = month2 - month1;
    let totalMonths = yearDiff * 12 + monthDiff;
    if (date2.getDate() < date1.getDate()) {
      totalMonths -= 1;
    }
    return totalMonths;
  }

  function getTargetDate() {
    const next3 = new Date(finalDate);
    next3.setMonth(next3.getMonth() + 3 * ((getMonthsBetweenDates(next3, new Date()) / 3) + 1));
    return next3;
  }

  function countTimeLeft(): string {
    const targetDate: Date = getTargetDate();
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
    const targetDate: Date = getTargetDate();
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
