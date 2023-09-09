import "./CreateExpensesMain.css";
import CreateExpenses from "./CreateExpenses";
export default function CreateExpensesMain(props) {
  const onExpensesSubmit = (ExpenseData) => {
    props.getExpenses(ExpenseData);
  };

  return (
    <div className="new-expense">
      <CreateExpenses onSubmit={onExpensesSubmit} />
    </div>
  );
}
