const express = require('express')
const API = require('./controllers/api/index');
const HTML = require('./controllers/html/index');
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//my api routes
app.use('/api', API);
app.use('/', HTML);

app.listen(PORT, () => {
    console.log(`serving APIs currently on port ${PORT}. Hello!`);
  });