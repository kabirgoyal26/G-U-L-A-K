const Account = require('../models/Account');

exports.createAccount = async (req, res) => {
  try {
    const { name, type, balance, userId } = req.body;
    const newAccount = new Account({ name, type, balance, userId });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
