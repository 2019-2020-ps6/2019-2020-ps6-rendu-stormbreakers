const { Router } = require('express')

const { getThemes, getQuizzesByTheme } = require('./manager')
const { buildQuizzes } = require('../quizzes/manager')

const router = new Router()



router.get('/', (req, res) => {
  try {
    const response = getThemes();
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:themeName/quizzes', (req, res) => {
  try {
    const response = getQuizzesByTheme(req.params.themeName).filter((value, index, self) => self.indexOf(value) === index);
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router