const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Statistique', {
  quizId: Joi.string(),
  questionId: Joi.string(),
  answer: Joi.boolean(),
  time: Joi.number(),
})
