const { Router } = require('express')

const { Quiz } = require('../../models')
const {Question} = require('../../models')
const { buildQuizz, buildQuizzes } = require('./manager')

const QuestionRoute = require('./questions');
const router = new Router()

router.get('/', (req, res) => {
  try {
  /*const response = [...Quiz.get()];
   for(let i=0;response.size>i;i++){
    questions:Question.get().filter((q) => q.quizId === req.params.quizId)
    }*/
    const response=buildQuizzes()
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/:quizId', (req, res) => {
  try {
  //  const response = {...Quiz.getById(req.params.quizId), questions:Question.get().filter((q) => q.quizId === req.params.quizId)}
  const response= buildQuizz(req.params.quizId)  
  res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})
router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
}) 



router.delete('/:quizId', (req, res) => {
  try {
    res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
})

router.use('/:quizId/questions',QuestionRoute)
module.exports = router
