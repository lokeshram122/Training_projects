import ExpenseItems from "../Components/ExpenseItems";

export default function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItems expenses={props.expenses[0]} />
      <ExpenseItems expenses={props.expenses[1]} />
      <ExpenseItems expenses={props.expenses[2]} />
    </div>
  );
}
