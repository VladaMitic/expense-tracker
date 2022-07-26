import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: '1',
    title: 'appartment',
    amount: '200',
    date: new Date(2021, 3, 28),
  },
  {
    id: '2',
    title: 'food',
    amount: '100',
    date: new Date(2021, 2, 28),
  },
  {
    id: '3',
    title: 'rings',
    amount: '35',
    date: new Date(2021, 2, 28),
  },
    {
    id: '4',
    title: 'appartment',
    amount: '200',
    date: new Date(2020, 2, 28),
  },
  {
    id: '5',
    title: 'book',
    amount: '50',
    date: new Date(2019, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState)=>[expense, ...prevState])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
