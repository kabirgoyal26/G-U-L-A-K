const mongoose = require('mongoose');
const { Schema } = mongoose;

const BudgetSchema = new Schema({
  amount: Schema.Types.Decimal128,
  lastAlertSent: { type: Date, default: null },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', BudgetSchema);
