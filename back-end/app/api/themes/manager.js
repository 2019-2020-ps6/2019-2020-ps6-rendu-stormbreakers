const { Quiz } = require('../../models')

const getThemes = () => {
    const quizzes = Quiz.get();
    var themes = [];
    for(let i = 0; i < quizzes.length; i++){
      themes.push(quizzes[i].theme);
    }
    return themes;
}

const getQuizzesByTheme = (theme) => {
  const quizzes = Quiz.get();
  var response = [];
    for(let i = 0; i < quizzes.length; i++){
      if(quizzes[i].theme == theme){
        console.log(quizzes[i]);
        response.push(quizzes[i]);
      }
    }
    return response;
}

module.exports = {
    getThemes,
    getQuizzesByTheme
}