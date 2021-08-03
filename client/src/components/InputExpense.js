import React, { Fragment, useState } from "react";
import "./styles.css";

const InputExpense = () => {
  // Must be a way to combine into one state object... Tried but couldn't get to work.
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);
  // const [errorMsg, setErrorMsg] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, category, cost };
      await fetch("/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add Expense</h1>

      <form
        className="d-flex mt-3 justify-content-center"
        onSubmit={onSubmitForm}
      >
        <label>
          Name
          <input
            type="text"
            name="expense-name"
            id="expense-name"
            placeholder="Name"
            className="form-control"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category
          <input
            type="text"
            name="expense-category"
            id="expense-category"
            placeholder="Category"
            className="form-control"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <label>
          Cost
          <input
            type="number"
            name="expense-cost"
            id="expense-cost"
            data-type="currency"
            placeholder="$1,000"
            className="form-control"
            // value={cost}
            required
            min="0"
            onChange={(e) => setCost(e.target.value)}
          />
        </label>
        <button className="btn btn-success mt-4 h-25">Add</button>
      </form>
    </Fragment>
  );
};

export default InputExpense;
