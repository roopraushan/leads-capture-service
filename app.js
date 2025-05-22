const express = require('express');
const connectDB = require('./src/config/db'); // changed from sequelize
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes');

const app = express();

connectDB(); // connect to MongoDB Atlas

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to lead-capturing service');
});

app.use(userRoutes.path, userRoutes.router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
