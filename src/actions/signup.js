
import * as TYPES from "./types";
import * as ROUTES from "../constants/routes";



export const signUp = ( email, password, fb, history) => {
    return dispatch => {
        dispatch(userSignUpLoading());
        fb.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                dispatch(userSignUp(true));
                history.push(ROUTES.SIGN_IN);
            })
            .catch(error => {
                dispatch(userSignUpError(error.message));
            });
    };
};


export const userSignUp = (payload) => ({
    type:    TYPES.SIGNUP_SUCCESS,
    payload: payload,
});

export const userSignUpLoading = (bool) => ({
    type:    TYPES.SIGNUP_LOADING,
    payload: bool,
});


export const userSignUpError = (error) => ({
    type:    TYPES.SIGNUP_ERROR,
    payload: error
});


