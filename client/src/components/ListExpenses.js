import React, { useEffect, useState } from "react";

const ListExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  //delete Function
  const deleteExpense = async (id) => {
    try {
      await fetch(`/expenses/${id}`, {
        method: "DELETE",
      });

      setExpenses(
        // we want all expenses EXCEPT the one we clicked delete on
        expenses.filter((expense) => expense.expense_id !== id)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const getExpenses = async () => {
    try {
      // await fetch("/expenses").then((body) =>
      //   body.json().then((data) => setExpenses(data))
      // );
      const response = await fetch("/expenses");
      const jsonData = await response.json();
      setExpenses(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Run getExpenses() on initial page load (on mount)
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
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
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(expense.cost)}
              </td>
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
    </>
  );
};

export default ListExpenses;
