const express = require('express');
const app = express();
const database = require('./config/database');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const budgetRoutes = require('./routes/budgetRoutes');

dotenv.config();

const PORT = process.env.PORT || 4000;

database.connect();

// Check if the routes are loaded properly
console.log("userRoutes:", userRoutes);
console.log("accountRoutes:", accountRoutes);
console.log("transactionRoutes:", transactionRoutes);
console.log("budgetRoutes:", budgetRoutes);

app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/users', userRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
