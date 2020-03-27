const { Router } = require('express')

const { Question } = require('../../../models')

const router = new Router({ mergeParams: true })

const { filterQuestionsFromQuizz, getQuestionWithId } = require('./manager')
const AnswerRoute = require('./answers');

router.get('/', (req, res) => {
    try {
        res.status(200).json(filterQuestionsFromQuizz(req.params.quizId))
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:questionId', (req, res) => {
    try {
        res.status(200).json(getQuestionWithId(req.params.quizId,req.params.questionId))
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/', (req, res) => {
    try {

        const question = req.body
        question.answers = []
        question.quizId = req.params.quizId
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

router.delete( (req, res)=>{
    try {
        for(let question in Question.get()){
            res.status(200).json(Question.delete(question.questionId))
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
router.use('/:questionId/answers',AnswerRoute)
module.exports = router