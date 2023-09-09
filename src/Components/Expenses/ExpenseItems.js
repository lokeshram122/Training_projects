import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
export default function ExpenseItems(props) {
  const { title, amount, date } = props.expenses;
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}
