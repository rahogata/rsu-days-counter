import React from 'react';
import './App.css';

function App() {

  function countDays(): string {
    const targetDate: Date = new Date('2024-09-15');
    const currentDate: Date = new Date();
    let months: number = targetDate.getMonth() - currentDate.getMonth();
    let days: number = targetDate.getDate() - currentDate.getDate();

    let result: string = "";
    if (months > 0) {
        result += `${months} month${months > 1 ? 's' : ''} `;
    }
    if (days > 0) {
        result += `${days} day${days > 1 ? 's' : ''}`;
    }

    return result.trim();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{countDays()} Left</p>
      </header>
    </div>
  );
}

export default App;
