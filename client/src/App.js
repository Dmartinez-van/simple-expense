import React, { Fragment } from "react";

//components
import InputExpense from "./components/InputExpense";
import ListExpenses from "./components/ListExpenses";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputExpense />
        <ListExpenses />
      </div>
    </Fragment>
  );
}

export default App;
