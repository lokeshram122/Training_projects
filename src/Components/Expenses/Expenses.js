import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const OnFilterSelectHandler = (SelectedOption) => {
    props.getFilterValue(SelectedOption);
  };

  return (
    <div className="expenses">
      <ExpensesFilter OnFilterSelect={OnFilterSelectHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItems expenses={expense} />
      ))}
      {/* <ExpenseItems expenses={props.expenses[0]} />
      <ExpenseItems expenses={props.expenses[1]} />
      <ExpenseItems expenses={props.expenses[2]} /> */}
    </div>
  );
}
