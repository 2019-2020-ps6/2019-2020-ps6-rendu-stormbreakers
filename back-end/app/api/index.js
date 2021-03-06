const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')
const StatRoute = require('./statistique')
const ThemeRoute = require('./themes')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/statistique', StatRoute)
router.use('/themes', ThemeRoute)
module.exports = router
