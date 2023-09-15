import React from "react";
import "./charts.css";
import ChartBar from "./chartbar";

const charts = (props) => {
  const dataArray = props.data.map((item) => item.value);
  const maxValue = Math.max(...dataArray);

  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          value={item.value}
          maxValue={maxValue}
          label={item.label}
          key={item.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default charts;
