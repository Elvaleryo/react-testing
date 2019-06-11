import * as TYPES from "../actions/types";

export const initialState = {
    logged: false,
    register: false,
    error: false,
    errorSignUp: false,
    user: '',
    menuOpen: false,
    questions: [],
    tempAnswers: [
            {
                key: 0,
                id: 'answer-0',
                value: '',
                correct: false,
            }
    ],
    selectedAnswers: [],
    userAnswers: [],
    selectedAnswersCount: 0,
    testResult : 0,
};


export function rootReducer(state = initialState, action) {

    switch (action.type) {
        case TYPES.AUTH_CHANGED:
            return { ...state, logged: action.logged,admin: action.admin, user: action.user, error: '' ,menuOpen: false};
        case TYPES.AUTH_LOADING:
            return { ...state, loading: action.payload};
        case TYPES.SIGN_IN_ERROR:
            return { ...state, error: action.payload };
        case TYPES.SIGNUP_SUCCESS:
            return { ...state, register: action.payload, errorSignUp: ''};
        case TYPES.SIGNUP_LOADING:
            return { ...state, loadingSIgnUp: action.payload};
        case TYPES.SIGNUP_ERROR:
            return { ...state, errorSignUp: action.payload };

        case TYPES.SAVE_QUESTION:
            let newQuestion = {key:action.key, title: action.question, answers: state.tempAnswers};
            return { ...state, questions: state.questions.concat(newQuestion), tempAnswers: initialState.tempAnswers };
        case TYPES.ADD_ANSWER:
            return { ...state,tempAnswers: state.tempAnswers.concat(action.payload) };
        case TYPES.DEL_ANSWER:
            return { ...state,tempAnswers: state.tempAnswers.filter((item, i) => item.key !== action.payload)};
        case TYPES.CHANGE_ANSWER:
            return {...state,tempAnswers: state.tempAnswers.map(answer => answer.key === action.id ? {...answer, value: action.value} : answer)};
        case TYPES.CHOOSE_ANSWER:
            let defaultChecked = state.tempAnswers.map(answer => answer.correct === true ? {...answer, correct: false} : answer);
            return {...state,tempAnswers: defaultChecked.map(answer => answer.key === action.id ? {...answer, correct: action.checked} : answer)};
        case TYPES.CHECK_ANSWER:
            let tempAnswer = state.selectedAnswers.filter((item, i) => item.questionIndex !== action.payload.questionIndex);
            return { ...state, selectedAnswers: tempAnswer.concat(action.payload) };
        case TYPES.SUBMIT_ANSWERS:
            let userAnswer = {userAnswerKey: action.key,user: state.user,date: action.date,score: action.score, answers: [action.answers]};
            return {...state, testResult: action.score, selectedAnswersCount: action.answersCount,userAnswers: state.userAnswers.concat(userAnswer), selectedAnswers: []};
        case TYPES.DELETE_QUESTION:
            return { ...state,questions: state.questions.filter((item, i) => item.title !== action.payload)};
        case TYPES.MENU_OPEN:
            return { ...state, menuOpen: action.payload};
        default:
            return state;
    }
}

