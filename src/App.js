import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import CreateExpensesMain from "./Components/CreateExpenses/CreateExpensesMain";
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const getExpensesHandler = (expensesData) => {
    setExpenses((prev) => [...prev, expensesData]);
  };

  return (
    <div className="App">
      <CreateExpensesMain getExpenses={getExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
