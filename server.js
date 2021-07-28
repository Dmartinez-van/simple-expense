const express = require("express");
const app = express();
const pool = require("./db");
const PORT = process.env.PORT || 5000;

app.use(express.json()); // req.body

app.get("/api", (req, res) => {
  res.json({ message: ["Hello from server!", "whoa"] });
});

app.get("/test", (req, res) => {
  res.send("This is from server.js");
});

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

// update a expense
app.put("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, amount } = req.body;

    const updateExpense = await pool.query(
      "UPDATE expenses SET name=$1, category=$2, amount=$3 WHERE expense_id=$4",
      [name, category, amount, id]
    );

    res.json("Expense was updated!");
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