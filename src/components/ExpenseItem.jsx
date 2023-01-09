import * as React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem({ title, date, cost }) {
  const defaultTitle = 'Not Found';
  const defaultDate= new Date().toLocaleDateString();
  const defaultCost= '0.00';
  return (
    <div className="expense-item">
      <div>{date ? new Date(date).toLocaleDateString() : defaultDate}</div>
      <div className="expense-item__description">
        <h2>{title ? title : defaultTitle}</h2>
        <div className="expense-item__price">${cost ? cost : defaultCost}</div>
      </div>
    </div>
  );
}
