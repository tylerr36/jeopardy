const express = require('express')
const passport = require('passport')
const Question = require('../models/question')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// public index
// router.get('/questions', (req, res, next) => {
//   Question.find()
//     .then(questions => {
//       return questions.map(question => question.toObject())
//     })
//     .then(questions => res.status(200).json({ questions: questions }))
//     .catch(next)
// })

// user specific index
router.get('/user_questions', requireToken, (req, res, next) => {
  let search = { owner: req.user.id }
  Question.find(search)
    .then(questions => {
      return questions.map(question => question.toObject())
    })
    .then(questions => res.status(200).json({ questions: questions }))
    .catch(next)
})

// show one user question
router.get('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => res.status(200).json({ question: question.toObject() }))
    .catch(next)
})

// create a question
router.post('/questions', requireToken, (req, res, next) => {
  req.body.question.owner = req.user.id

  Question.create(req.body.question)
    .then(question => {
      res.status(201).json({ question: question.toObject() })
    })
    .catch(next)
})

// update a question
router.patch('/questions/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.question.owner
  Question.findById(req.params.id)
    .populate('question')
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)
      return question.updateOne(req.body.question)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// delete a question
router.delete('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .populate('question')
    .then(handle404)
    .then(question => {
      requireOwnership(req, question)
      question.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
