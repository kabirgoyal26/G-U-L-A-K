const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route to create a new transaction
router.post('/', transactionController.createTransaction);

// Route to get all transactions
router.get('/', transactionController.getAllTransactions);

// Route to get a single transaction by id
router.get('/:id', transactionController.getTransactionById);

// Route to update a transaction
router.put('/:id', transactionController.updateTransaction);

// Route to delete a transaction
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
