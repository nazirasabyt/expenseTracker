import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const unixTime = props.date;
  const date = new Date(unixTime * 1000);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toDate().getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
