import * as React from 'react';
import ExpenseList from './components/ExpenseList';
import './index.css';

export default function App() {
  const data = [
    {
      title: 'Car Insurance',
      date: new Date().toLocaleDateString('en-GB'),
      cost: '299.99',
    },
    {
      title: 'Weekly Groceries',
      date: new Date().toLocaleDateString('en-GB'),
      cost: '156.00',
    },
    {
      title: 'Utitlity Bills',
      date: new Date().toLocaleDateString('en-GB'),
      cost: '450.20',
    },
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ExpenseList expenses={data}></ExpenseList>
    </div>
  );
}