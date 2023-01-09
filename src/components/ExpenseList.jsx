import * as React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpenseList({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((row, index) => (
        <ExpenseItem
          key={index}
          title={row.title}
          date={row.date}
          cost={row.cost}
        ></ExpenseItem>
      ))}
    </div>
  );
}