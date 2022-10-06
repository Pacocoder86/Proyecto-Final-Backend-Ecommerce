import mongoose from 'mongoose'

const salesSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  Cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalprice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    required: true
  }

})

export default mongoose.model('Sales', salesSchema)
