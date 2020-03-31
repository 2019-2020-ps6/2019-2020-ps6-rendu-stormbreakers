const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  theme: Joi.string(),
  name: Joi.string().required(),
  questions: Joi.array()
})