const { Quiz, Question } = require('../../../models')
const { filterAnswersFromQuestion } = require('./answers/manager')

/**
 * Questions Manager.
 * This file contains all the logic needed to by the question routes.
 */

/**
 * filterQuestionsFromQuizz.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param quizId
 */
const filterQuestionsFromQuizz = (quizId) => {
  const quizIdParse = parseInt(quizId, 10)
  const questions = Question.get().filter((question) => {
    const QuestionQuizId = parseInt(question.quizId, 10)
    return QuestionQuizId === quizIdParse
  })
  const questionsWithAnswer = questions.map((q) => {
    const answers = filterAnswersFromQuestion(q.id)
    return { ...q, answers }
  })
  return questionsWithAnswer
}
/**
 * getQuestionFromQuiz.
 * This function retrieves a question from a quiz. It will throw a not found exception if the quizId in the question is different from the one provided in parameter.
 * @param quizId
 * @param questionId
 */
const getQuestionWithId = (quizId, questionId) => {
  // Check if quizId exists, if not it will throw a NotFoundError
  const quiz = Quiz.getById(quizId)
  const quizIdInt = parseInt(quizId, 10)
  const question = Question.getById(questionId)
  // if (question.quizId !== quizIdInt) throw new NotFoundError(`${question.name} id=${questionId} was not found for ${quiz.name} id=${quiz.id} : not found`)
  return { ...question, answers: filterAnswersFromQuestion(question.id) }
}

module.exports = {
  filterQuestionsFromQuizz,
  getQuestionWithId,
}
