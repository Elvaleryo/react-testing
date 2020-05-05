import { compose } from 'recompose';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import { auth } from '../actions/auth';
import SignIn from '../components/signin';

import { withFirebase } from '../firebase';



const mapStateToProps = (store) => {
    return {
        error: store.error,
        logged: store.logged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, firebase,history) => {
            dispatch(auth(values.email,values.password,firebase,history));
        },
    }
};

const SignInForm = compose(withRouter,withFirebase)(SignIn);

export const SignInPage = connect(mapStateToProps, mapDispatchToProps)(SignInForm);