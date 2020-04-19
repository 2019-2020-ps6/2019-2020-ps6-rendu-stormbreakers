const { Router } = require('express')
const router = new Router()
const{ Quiz} = require('../../models')
const { Statistique } = require('../../models')
router.get('/', (req, res) => {
  try {
    response =  [...Statistique.get()]
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/:quizId', (req, res) => {
  try {
  const response = [...Statistique.get().filter((stat) => stat.quizId == req.params.quizId )]
  res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId/:questionId', (req, res) => {
    try {
    const response = [...Statistique.get().filter((stat) => stat.quizId == req.params.quizId && stat.questionId ==  req.params.questionId)]
    res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err)
    }
  })

router.post('/', (req, res) => {
  try {
    const stat = Statistique.create({ ...req.body })
    res.status(201).json(stat)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
}) 


module.exports = router