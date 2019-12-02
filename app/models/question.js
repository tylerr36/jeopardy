const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question_text: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Question', questionSchema)
