const Pool = require("pg").Pool; // .Pool allows us to configure the database settings

const pool = new Pool({
  user: "development",
  host: "localhost",
  database: "expense_track_db",
  port: 5432,
});

module.exports = pool;
