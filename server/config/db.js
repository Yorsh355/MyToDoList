require("dotenv").config();
const { Pool } = require("pg");

//const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ToDoList",
  password: "Colombia45a",
  port: 5432,
});

/* const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
}); */

pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Error al ejecutar consulta", err.stack);
  console.log("Resultado de la consulta:", res.rows[0]);
});

module.exports = pool;
