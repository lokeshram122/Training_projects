import "./ExpensesFilter.css";
export default function ExpensesFilter(props) {
  const onSelect = (e) => {
    props.OnFilterSelect(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label
          htmlFor="filter"
          // className="expenses-filter label"
        >
          Filter by year:
        </label>
        <select
          name="filter"
          id="filter"
          onChange={onSelect}
          // className="expenses-filter select"
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2021">2022</option>
          <option value="2021">2023</option>
        </select>
      </div>
    </div>
  );
}
