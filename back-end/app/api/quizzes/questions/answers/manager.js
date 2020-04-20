const { Answer } = require('../../../../models')
const { getQuestionFromQuiz } = require('../manager')

/**
 * filterAnswersFromQuestion.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param questionId
 */
const filterAnswersFromQuestion = (questionId) => {
  const questionIdParse = parseInt(questionId, 10)
  return Answer.get().filter((answer) => {
    const answerQuestionId = parseInt(answer.questionId, 10)
    return answerQuestionId === questionId
  })
}

/**
 * getAnswerFromQuestion.
 * This function retrieves an answer from a question. It will throw a not found exception if the questionId in the answer is different from the one provided in parameter.
 * @param quizId
 * @param questionId
 * @param answerId
 */
const getAnswerFromQuestion = (quizId, questionId, answerId) => {
  const question = getQuestionFromQuiz(quizId, questionId)
  const answer = Answer.getById(answerId)
  return answer
}

module.exports = {
  getAnswerFromQuestion,
  filterAnswersFromQuestion,
}
