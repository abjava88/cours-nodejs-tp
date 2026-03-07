const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('Employee', employeeSchema)