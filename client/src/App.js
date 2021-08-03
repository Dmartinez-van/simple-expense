import React from "react";

//components
import InputExpense from "./components/InputExpense";
import ListExpenses from "./components/ListExpenses";

function App() {
  return (
    <>
      <div className="container">
        <InputExpense />
        <ListExpenses />
      </div>
    </>
  );
}

export default App;
