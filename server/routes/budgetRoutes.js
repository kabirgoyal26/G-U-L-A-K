const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

// Route to create a new budget
router.post('/', budgetController.createBudget);

// Route to get the user's budget
router.get('/', budgetController.getBudget);

// Route to update a budget
router.put('/', budgetController.updateBudget);

module.exports = router;
