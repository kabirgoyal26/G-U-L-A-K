const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, unique: true },
  email: { type: String, unique: true },
  name: { type: String, default: null },
  imageUrl: { type: String, default: null },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
  budgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
