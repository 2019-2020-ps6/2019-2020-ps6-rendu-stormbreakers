const { Router } = require('express')

const {Quiz} = require('../../models')

const { Theme } = require('../../models')
//const { buildQuizz, buildQuizzes } = require('./manager')



const router = new Router()


router.get('/', (req, res) => {
  try {
    
    res.status(200).json([...Theme.get()])
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/:themeId/quiz', (req, res) => {
  try {
  //renvoie les quiz qui ont ce thème
  const quizzes = Quiz.get()
  const response = []
  console.log(quizzes.size);
  for(let i=0; quizzes.size>i;i++){
    console.log(i);
    console.log(quizzes[i].theme);
    console.log(Theme.getById(req.params.themeId).name);
    if(Theme.getById(req.params.themeId).name == quizzes[i].theme){
      response.push(quizzes[i])
    }
  }
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/themes', (req, res) => {
  try {
    const theme = Theme.create({...req.body})
    res.status(201).json(theme)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})


router.delete('/:themeId', (req, res) => {
  try {
    Theme.delete(req.params.themeId)
    res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router