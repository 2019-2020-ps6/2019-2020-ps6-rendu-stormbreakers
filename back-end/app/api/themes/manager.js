const { Quiz } = require('../../models')

const getThemes = () => {
    const quizzes = Quiz.get();
    var themes = [];
    for(let i = 0; i < quizzes.length; i++){
      themes.push(quizzes[i].theme);
    }
    return themes.filter((value, index, self) => self.indexOf(value) === index);
}

const getQuizzesByTheme = (theme) => {
  var themeDecode= decodeURI(theme)
  console.log("theme"+themeDecode)
  const quizzes = Quiz.get();
  var response = [];
    for(let i = 0; i < quizzes.length; i++){
      if(quizzes[i].theme && quizzes[i].theme.toLowerCase() === themeDecode){
        console.log("in"+quizzes[i].name)
        response.push(quizzes[i]);
      }
  }
    return response;
}

module.exports = {
    getThemes,
    getQuizzesByTheme
}