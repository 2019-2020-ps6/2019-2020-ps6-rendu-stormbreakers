import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

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
export const QUIZ_LIST: Quiz[] = [
    {
        id: 'vfjnkvf',
        name: 'Les Acteurs', // What's happening if I change this value..?
        questions: [QUESTION_ACTOR,QUESTION_ACTOR2],
    },
    {
        id: 'dcbdvd',
        name: 'Les Sports',
        questions: [],
    }
];
