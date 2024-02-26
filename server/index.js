require('dotenv').config();
const express = require('express');
const user = require('./queries/user.js')
const bodyParser = require('body-parser')
let { PORT } = process.env;
const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json({page: "root"})
  });

app.get('/users', user.getUsers)
app.get('/users/:id', user.getUserById)
app.post('/users', user.createUser)
app.put('/users/:id',user.updateUser)
app.delete('/users/:id',user.deleteUser)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});