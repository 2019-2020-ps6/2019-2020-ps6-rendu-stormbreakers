const { Router } = require('express')

const { Answer } = require('../../../../models')
const { Question } = require('../../../../models')

const router = new Router({ mergeParams: true })


router.get('/', (req, res) => {
  try {
    res.status(200).json(Answer.get().filter((t) => t.questionId === req.params.questionId))
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/:answerId', (req, res) => {
  try {
    res.status(200).json(Answer.getById(req.params.answerId))
  } catch (err) {
    res.status(500).json(err)
  }
})
router.post('/', (req, res) => {
  try {
    const answer = req.body
    answer.questionId = req.params.questionId
    const ret = Answer.create(answer)
    // let question = Question.getById(answer.questionId)
    // console.log(question)
    // question.answers.push(answer)
    res.status(201).json(ret)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})


router.delete('/:answerId', (req, res) => {
  try {
    /* const question = Question.getById(req.params.questionId)
        const index = question.answers.indexOf(Answer.getById(req.params.answerId))
        if(index !=-1){
            question.answers.splice(index,1)
        } */
    res.status(200).json(Answer.delete(req.params.answerId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/', (req, res) => {
  try {
    const list = Answer.get().filter((t) => t.questionId === req.params.questionId)
    console.log(list.length)
    for (let i = 0; i <= list.length; i++) {
      console.log(list[i].id)
      Answer.delete(list[i].id)
    }
    res.status(200).status(end)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router
