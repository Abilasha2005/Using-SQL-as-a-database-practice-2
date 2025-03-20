require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();


const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;


const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,

});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database!');
});


app.get('/', (req, res) => {
  res.send('Hello, World! Express and MySQL connection are working!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
