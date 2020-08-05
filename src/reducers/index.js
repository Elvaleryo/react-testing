import * as TYPES from "../actions/types";

export const initialState = {
    logged: false,
    register: false,
    error: false,
    errorSignUp: false,
    user: '',
    questions: [],
    newAnswers: [],
    selectedAnswers: [],
    userAnswers: [],
    score : 0,
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
            return { ...state, questions: state.questions.concat(action.payload), newAnswers: []};
        case TYPES.ADD_ANSWER:
            return { ...state, newAnswers: state.newAnswers.concat(action.payload) };
        case TYPES.DELETE_ANSWER:
            return { ...state,newAnswers: state.newAnswers.filter((item) => item.id !== action.payload)};
        case TYPES.CHANGE_ANSWER:
            return {...state,newAnswers: state.newAnswers.map(answer => answer.id === action.id ? {...answer, value: action.value} : answer)};
        case TYPES.CHOOSE_ANSWER:
            let defaultChecked = state.newAnswers.map(answer => answer.correct === true ? {...answer, correct: false} : answer);
            return {...state, newAnswers: defaultChecked.map(answer => answer.id === action.id ? {...answer, correct: true} : answer)};

        case TYPES.SUBMIT_ANSWERS:
            return {...state, score: action.score, userAnswers: action.userAnswers};

        case TYPES.DELETE_QUESTION:
            return { ...state,questions: state.questions.filter((item) => item.id !== action.payload)};
        default:
            return state;
    }
}

