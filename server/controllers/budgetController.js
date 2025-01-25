const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
  try {
    const { amount, userId } = req.body;
    const newBudget = new Budget({ amount, userId });
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({ userId: req.query.userId });
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const { amount } = req.body;
    const updatedBudget = await Budget.findOneAndUpdate({ userId: req.body.userId }, { amount }, { new: true });
    if (!updatedBudget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
