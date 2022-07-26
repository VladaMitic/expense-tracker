import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCloseForm }) => {
  const [enteredValue, setEnteredValue] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const titleChangeHandler = (e) => {
    const { name, value } = e.target;
    setEnteredValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...enteredValue,
      date: new Date(enteredValue.date),
    };
    setEnteredValue({
      title: '',
      amount: '',
      date: '',
    });
    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={enteredValue.title}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            value={enteredValue.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            value={enteredValue.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expens__actions">
        <button type="button" onClick={onCloseForm}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
