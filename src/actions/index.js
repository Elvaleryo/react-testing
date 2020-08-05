import * as TYPES from './types';



export const userAuth = (auth,admin,user,) => ({
    type:    TYPES.AUTH_CHANGED,
    logged: auth,
    admin: admin,
    user: user,
});

export const saveQuestion = (question) => ({
    type:    TYPES.SAVE_QUESTION,
    payload: question,
});

export const addAnswer = (answer) => ({
    type: TYPES.ADD_ANSWER,
    payload: answer,
});

export const deleteAnswer = (index) => ({
    type: TYPES.DELETE_ANSWER,
    payload: index,
});

export const changeAnswer = (value, id) => ({
    type: TYPES.CHANGE_ANSWER,
    value: value,
    id: id,
});

export const chooseAnswer = (id) => ({
    type: TYPES.CHOOSE_ANSWER,
    id: id,
});

export const submitAnswers = (score, userAnswers) => ({
    type: TYPES.SUBMIT_ANSWERS,
    score: score,
    userAnswers: userAnswers,
});

export const deleteQuestion = (id) => ({
    type: TYPES.DELETE_QUESTION,
    payload: id,
});
