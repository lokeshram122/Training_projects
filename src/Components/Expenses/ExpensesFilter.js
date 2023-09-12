import "./ExpensesFilter.css";
import React, { useState } from "react";
export default function ExpensesFilter(props) {
  const [filteredDate, setFilteredDate] = useState("2019");

  const onSelect = (e) => {
    setFilteredDate(e.target.value);
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
          value={filteredDate}
          // className="expenses-filter select"
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
