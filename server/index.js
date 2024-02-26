require('dotenv').config();
const express = require('express');
const {sql} = require('./db.js')
let { PORT } = process.env;
const app = express();

app.get('/', (req, res) => {
    res.json({page: "root"})
  });

app.get('/users', async (req, res) => {
    const users = await sql`
    SELECT * FROM users;
    `
    res.json(users)
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});