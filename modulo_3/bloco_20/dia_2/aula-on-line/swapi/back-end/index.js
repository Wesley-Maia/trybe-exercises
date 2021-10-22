const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "star_wars",
});

app.use(cors());

app.get("/planets", async (req, res) => {
  let { page, orderBy, orderDirection } = req.query;
  orderBy = orderBy || "name";
  orderDirection = orderDirection || "asc";
  const offset = (page - 1) * 10;

  // observação: Não é recomendado interpolar nada dentro de uma query pois abre brecha para vulnerabilidades de segurança.
  const [rows] = await connection.execute(
    `SELECT * FROM star_wars.planet ORDER BY ${orderBy} ${orderDirection} LIMIT 10 OFFSET ?`,
    [`${offset}`]
  );

  const [results] = await connection.execute(
    "SELECT count(*) as total FROM star_wars.planet"
  );

  const { total } = results[0];

  res.status(200).json({ planets: rows, total });
});

app.listen(3001, () => console.log("SWAPI rodando localmente..."));
