const express = require('express');
const booksRoutes = require('./routes/booksRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}))

app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use('/api/v1/books', booksRoutes);

module.exports = app;
