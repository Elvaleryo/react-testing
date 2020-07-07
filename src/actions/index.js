import * as TYPES from './types';



export const userAuth = (auth,admin,user,) => ({
    type:    TYPES.AUTH_CHANGED,
    logged: auth,
    admin: admin,
    user: user,
});

export const saveQuestion = (question, key) => ({
    type:    TYPES.SAVE_QUESTION,
    question: question,
    key: key,
});

export const addAnswer = (answer) => ({
    type: TYPES.ADD_ANSWER,
    payload: answer,
});

export const deleteAnswer = (answer) => ({
    type: TYPES.DEL_ANSWER,
    payload: answer,
});

export const changeAnswer = (val,id) => ({
    type: TYPES.CHANGE_ANSWER,
    value: val,
    id: id,
});

export const chooseAnswer = (checked,id) => ({
    type: TYPES.CHOOSE_ANSWER,
    checked: checked,
    id: id,
});

export const checkAnswer = (answer) => ({
    type: TYPES.CHECK_ANSWER,
    payload: answer,
});


export const submitAnswers = (score,count,key,answers,date) => ({
    type: TYPES.SUBMIT_ANSWERS,
    answersCount: count,
    key: key,
    answers: answers,
    date: date,
    score: score,
});

export const deleteQuestion = (title) => ({
    type: TYPES.DELETE_QUESTION,
    payload: title,
});
