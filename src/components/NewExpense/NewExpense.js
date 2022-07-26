import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isClicked, setIsClicked] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const openFormHandler = () => {
    setIsClicked(true);
  }

  const closeFormHandler = () => {
    setIsClicked(false);
  }

  const button = (
      <button onClick={openFormHandler} type="submit">Add new expense</button>
  );

  const form = (
      <ExpenseForm
        onCloseForm={closeFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
  );

  return <div className="new-expense">{isClicked ? form : button}</div>;
};

export default NewExpense;
