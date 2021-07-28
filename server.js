const express = require("express");
const app = express();
const pool = require("./db");
const PORT = process.env.PORT || 5000;

app.use(express.json()); // req.body

// ROUTES //

// get all expenses
app.get("/expenses", async (req, res) => {
  try {
    const allExpenses = await pool.query("SELECT * FROM expenses");
    res.json(allExpenses.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get specific expense
app.get("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await pool.query(
      "SELECT * FROM expenses WHERE expense_id=$1",
      [id]
    );
    res.json(expense.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a expense
app.post("/expenses", async (req, res) => {
  try {
    //await
    const { name, category, amount } = req.body;
    const newExpense = await pool.query(
      "INSERT INTO expenses (name, category, amount) VALUES ($1, $2, $3) RETURNING *",
      [name, category, amount]
    );
    res.json(newExpense);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a expense
app.delete("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteExpense = await pool.query(
      "DELETE FROM expenses WHERE expense_id = $1",
      [id]
    );

    res.json("Expense was successfully deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
