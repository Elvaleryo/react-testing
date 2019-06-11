
import * as TYPES from "./types";
import {admin} from "../constants/roles";
import * as ROUTES from "../constants/routes";



export const auth = ( email, password, fb, history) => {
    return dispatch => {
        dispatch(userAuthLoading());

        fb.doSignInWithEmailAndPassword(email, password)
            .then(authUser => {

                    let adminFlag = authUser.user.email === admin;

                    dispatch(userAuth(true, adminFlag, email));

                    localStorage.setItem('logged', 1);
                    adminFlag ? localStorage.setItem('admin', adminFlag) : localStorage.setItem('admin', '');
                    history.push(ROUTES.HOME);

            })
            .catch(error => {
                dispatch(userLogInError(error.message));


            });
    };
};


export const userAuth = (auth,admin,email) => ({
    type:    TYPES.AUTH_CHANGED,
    logged: auth,
    admin: admin,
    user: email,
});

export const userAuthLoading = (bool) => ({
    type:    TYPES.AUTH_LOADING,
    payload: bool,
});


export const userLogInError = (error) => ({
    type:    TYPES.SIGN_IN_ERROR,
    payload: error
});


