import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2019');
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYaear={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensesToRender={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
