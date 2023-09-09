import { useState } from "react";
import "./CreateExpenses.css";
export default function CreateExpenses(props) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function formSubmit(e) {
    e.preventDefault();
    let expenses = {
      ...formData,
      date: new Date(formData.date),
    };
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
    props.onSubmit(expenses);
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, amount: e.target.value };
              });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, date: e.target.value };
              });
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <input type="submit" value="Add Expense" />
      </div>
    </form>
  );
}
