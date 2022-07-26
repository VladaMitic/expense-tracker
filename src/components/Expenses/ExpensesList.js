import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expensesToRender }) => {
  const list = expensesToRender.map((item) => {
    return (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    );
  });

  return expensesToRender.length === 0 ? (
    <p className="expenses-list__fallback">No expenses of that year is found</p>
  ) : (
    <ul className="expenses-list">{list}</ul>
  );
};

export default ExpensesList;
