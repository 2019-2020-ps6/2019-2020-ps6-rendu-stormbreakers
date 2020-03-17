const { Router } = require('express')

const { Question } = require('../../../models')

const router = new Router({ mergeParams: true })


const AnswerRoute = require('./answers');

router.get('/', (req, res) => {
    try {
        res.status(200).json(Question.get().filter(t => t.quizId===req.params.quizId))
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:questionId', (req, res) => {
    try {
        res.status(200).json(Question.getById(req.params.questionId))
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/', (req, res) => {
    try {

        const question = req.body
        question.answers = []
        question.quizId = req.params.quizId
        console.log(req.params.quizId)
        const ret = Question.create(question)
        res.status(201).json(ret)
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json(err.extra)
        } else {
            res.status(500).json(err)
        }
    }
})


router.delete('/:questionId', (req, res) => {
    try {
        res.status(200).json(Question.delete(req.params.questionId))
    } catch (err) {
        res.status(500).json(err)
    }
})
router.use('/:questionId/answers',AnswerRoute)
module.exports = router