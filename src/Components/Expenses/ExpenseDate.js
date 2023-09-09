import "./ExpenseDate.css";
export default function ExpenseDate(props) {
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
}
