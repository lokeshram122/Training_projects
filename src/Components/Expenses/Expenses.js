import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

export default function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState("");
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
      {FilteredExpenses.length > 0 && (
        <ExpensesChart expenses={FilteredExpenses} />
      )}
      {FilteredExpenses.length > 0 &&
        FilteredExpenses.map((expense) => <ExpenseItems expenses={expense} />)}
      {FilteredExpenses.length == 0 && <h2>No Results Found</h2>}
      {/* <ExpenseItems expenses={props.expenses[0]} />
      <ExpenseItems expenses={props.expenses[1]} />
      <ExpenseItems expenses={props.expenses[2]} /> */}
    </div>
  );
}
