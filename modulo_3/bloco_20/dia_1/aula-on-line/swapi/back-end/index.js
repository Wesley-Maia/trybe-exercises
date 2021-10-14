const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'star_wars'
});

app.use(cors());

app.get('/planets', async(req, res) => {
	const [rows] = await connection.execute('SELECT * FROM star_wars.planet');
	res.status(200).json({ planets: rows })
});

app.listen(3001, () => console.log('SWAPI rodando localmente...'));
