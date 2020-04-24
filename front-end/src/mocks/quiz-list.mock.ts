import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { Theme } from '../models/theme.model';

export const THEME_LIST : Theme[] = [
    {
        name : 'SPORT',
    }, 
    {
        name: 'MOVIES',
    },
];
export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',

     answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
         {
            value: 'La grande illusion',
            isCorrect: true,
         }
     ]
};

export const QUESTION_ACTOR2: Question = {
    label: 'Edouard baer a joué dans...',
    answers: [
       {
           value: 'Asterix et obelix',
           isCorrect: true,
       },
        {
           value: 'Taxi 4',
           isCorrect: false,
        }
    ]
};
export const QUESTION_ACTOR3: Question = {
    label: 'Leonardo dicaprio a joué dans...',
    answers: [
       {
           value: 'Titanic',
           isCorrect: true,
       },
        {
           value: 'After',
           isCorrect: false,
        }
    ]
};
export const QUIZ_LIST: Quiz[] = [
    {
        id: 'vfjnkvf',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: THEME_LIST[0].name,
        questions: [QUESTION_ACTOR,QUESTION_ACTOR2,QUESTION_ACTOR3],
    },
    {
        id: 'dcbdvd',
        name: 'Les Sports',
        theme: THEME_LIST[1].name,
        questions: [],
    }
];
