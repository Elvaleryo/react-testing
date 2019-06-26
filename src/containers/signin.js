import { compose } from 'recompose';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import { auth } from '../actions/auth';
import SignInForm from '../components/signin';

import { withFirebase } from '../firebase';



const mapStateToProps = (store) => {
    return {
        error: store.error,
        logged: store.logged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onSubmit: (e,email,password,fb,history) => {
            e.preventDefault();
            dispatch(auth(email,password,fb,history));
        },

    }
};



const SignIn = compose(withRouter,withFirebase)(SignInForm);

export const SignInPage = connect(mapStateToProps, mapDispatchToProps)(SignIn);



