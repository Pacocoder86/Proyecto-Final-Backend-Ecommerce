import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  role: {
    type: String,
    enum: ['admin', 'employee', 'customer'],
    default: 'employee',
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  creditCard: {
    type: Number,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('User', userSchema)
