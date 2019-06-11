import { compose } from 'recompose';
import { connect } from 'react-redux';

import { signUp } from '../actions/signup';
import SignUpPage from '../components/signup';


import { withFirebase } from '../firebase';
import {withRouter} from "react-router-dom";



const mapStateToProps = (store, ownProps) => {
    return {
        error: store.errorSignUp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        onSubmit: (e,email,password,fb,history) => {
            e.preventDefault();
            dispatch(signUp(email,password,fb,history));
        },

    }
};



const SignUpView = compose(withRouter,withFirebase)(SignUpPage);

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpView);



