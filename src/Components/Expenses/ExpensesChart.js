import React from "react";
import Charts from "../Charts/charts";
const ExpensesChart = (props) => {
  const data = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];

  for (const item of props.expenses) {
    console.log(item);
    const expenseMonth = item.date.getMonth();
    data[expenseMonth].value += item.amount;
  }

  return <Charts data={data} />;
};

export default ExpensesChart;
