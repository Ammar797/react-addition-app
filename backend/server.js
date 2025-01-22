const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'addition',
  password: 'root',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/add', async (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;

  // Insert into DB and get the last 5 records
  await pool.query('INSERT INTO operations (num1, num2, result) VALUES ($1, $2, $3)', [num1, num2, result]);
  const history = await pool.query('SELECT * FROM operations ORDER BY id DESC LIMIT 5');
  res.json({ result, history: history.rows });
});

app.listen(5000, () => console.log('Server running on port 5000'));
