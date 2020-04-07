const { Router } = require('express')

const { Question, Quiz, Answer } = require('../../../models')

const router = new Router({ mergeParams: true })

const { filterQuestionsFromQuizz, getQuestionWithId } = require('./manager')
const AnswerRoute = require('./answers');

router.get('/', (req, res) => {
    try {
        console.log("Get start.")
        Quiz.getById(req.params.quizId)
        console.log("Quiz exists.")
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
        console.log("Post start.")
        Quiz.getById(req.params.quizId)
        console.log("Quiz exists.")
        const quizId = parseInt(req.params.quizId)
        let question = Question.create({ label: req.body.label, quizId })
        console.log("Question exists.")
        if (req.body.answers && req.body.answers.length > 0) {
            console.log("Answers are present.")
            let answers = req.body.answers.map((answer) => Answer.create({ ...answer, questionId: question.id }))
            question = {...question, answers}
          }
          console.log(question);
        res.status(201).json(question)
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
        getQuestionWithId(req.params.quizId, req.params.questionId)
        Question.delete(req.params.questionId)
        res.status(204).end()
    } catch (err) {
        res.status(500).json(err)
    }
})

/*
router.delete( (req, res)=>{
    try {
        for(let question in Question.get()){
            res.status(200).json(Question.delete(question.questionId))
        }
    } catch (err) {
        res.status(500).json(err)
    }
})*/

router.use('/:questionId/answers',AnswerRoute)
module.exports = router