import React, {useEffect, useState} from 'react';
import NewExpenseForm from './components/Expense/new-expense-form/NewExpenseForm';
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
  const [expenses, setExpenses] = useState([...data]);
  const [counter, setCounter] = useState({
    count: 3,
  })
  const addNewExpense = (expense) => {
    console.log(expense);
    // data.push({...expense});
    // console.log(data);
    setExpenses((prevState)=>{
      return [...prevState, expense]
    });
  }
  useEffect(()=>{
    console.log(expenses);
  },[expenses]);

  const updateCounterHandler = () => {
    setCounter((prevState)=>({count: prevState.count+1}));
    console.log(counter);
  }
  return (
    <div>
      <h1>Hello StackBlitz! {counter.count}</h1>
      <button onClick={updateCounterHandler}>Count</button>
      <NewExpenseForm onAddNewExpense={addNewExpense}></NewExpenseForm>
      <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  );
}