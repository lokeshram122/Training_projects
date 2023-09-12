import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

export default function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState();
  const OnFilterSelectHandler = (SelectedOption) => {
    setFilteredValue(SelectedOption);
  };
  var FilteredExpenses = [];
  FilteredExpenses = props.expenses.filter(
    (x) => new Date(x.date).getFullYear() == filteredValue
  );

  return (
    <div className="expenses">
      <ExpensesFilter OnFilterSelect={OnFilterSelectHandler} />
      {FilteredExpenses.map((expense) => (
        <ExpenseItems expenses={expense} />
      ))}
      {/* <ExpenseItems expenses={props.expenses[0]} />
      <ExpenseItems expenses={props.expenses[1]} />
      <ExpenseItems expenses={props.expenses[2]} /> */}
    </div>
  );
}
