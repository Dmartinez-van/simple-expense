import React, { Fragment, useEffect, useState } from "react";

const ListExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  //delete Function
  const deleteExpense = async (id) => {
    try {
      await fetch(`/expenses/${id}`, {
        method: "DELETE",
      });

      setExpenses(
        expenses.filter((expense) => expense.expense_id !== id) // we want all expenses EXCEPT the one we clicked delete on
        // .sort((a, b) => {
        //   return a - b;
        // })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await fetch("/expenses");
      console.log("response: ", response);
      const jsonData = await response.json();
      console.log("jsonData: ", jsonData);

      setExpenses(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Expense List</h1>
      <table className="table mt-3 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expense_id}>
              <td>{expense.expense_id}</td>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteExpense(expense.expense_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListExpenses;
