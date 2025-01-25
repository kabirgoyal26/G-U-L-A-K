const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  type: { type: String, enum: ['INCOME', 'EXPENSE'] },
  amount: Schema.Types.Decimal128,
  description: { type: String, default: null },
  date: { type: Date },
  category: { type: String },
  receiptUrl: { type: String, default: null },
  isRecurring: { type: Boolean, default: false },
  recurringInterval: { type: String, enum: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'] },
  nextRecurringDate: { type: Date, default: null },
  lastProcessed: { type: Date, default: null },
  status: { type: String, enum: ['PENDING', 'COMPLETED', 'FAILED'], default: 'COMPLETED' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
