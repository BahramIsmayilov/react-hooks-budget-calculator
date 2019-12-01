import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleClear, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
        {expenses.length > 0 && (
          <button className="btn" onClick={handleClear}>
            clear expenses
            <MdDelete className="btn-icon" />
          </button>
        )}
      </ul>
    </>
  );
};

export default ExpenseList;
