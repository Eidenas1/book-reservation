const express = require('express');
const booksRoutes = require('./routes/booksRoutes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use('/api/v1/books', booksRoutes);

module.exports = app;
