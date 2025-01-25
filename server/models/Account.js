const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
  name: String,
  type: { type: String, enum: ['CURRENT', 'SAVINGS'] },
  balance: { type: Schema.Types.Decimal128, default: 0 },
  isDefault: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', AccountSchema);
