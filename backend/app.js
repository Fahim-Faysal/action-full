const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'testdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

app.get('/', (req, res) => res.send('Hello from Node backend 🚀'));

app.listen(port, () => console.log(`Server running on port ${port}`));
