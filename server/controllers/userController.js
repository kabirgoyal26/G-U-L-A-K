const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { clerkUserId, email, name, imageUrl } = req.body;
    const newUser = new User({ clerkUserId, email, name, imageUrl });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
