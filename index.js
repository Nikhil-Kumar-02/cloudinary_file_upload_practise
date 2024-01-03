const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/database');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
connectDB();