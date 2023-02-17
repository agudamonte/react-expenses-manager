import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.34,
    date: new Date(2023, 1, 9),
  },
  {
    id: 'e2',
    title: 'Paper',
    amount: 294.34,
    date: new Date(2023, 1, 9),
  },
  {
    id: 'e3',
    title: 'books',
    amount: 222.5,
    date: new Date(2023, 1, 9),
  },
  {
    id: 'e4',
    title: 'helmet',
    amount: 2400,
    date: new Date(2023, 2, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    /* the clean way to update our state when it's 
     based on an older snapshot of the same state */
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
