import { compose } from 'recompose';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";


import { signUp } from '../actions/signup';
import SignUpPage from '../components/signup';


import { withFirebase } from '../firebase';



const mapStateToProps = (store) => {
    return {
        error: store.errorSignUp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, fb, history) => {
            dispatch(signUp(values.email, values.password, fb, history));
        },
    }
};



const SignUpView = compose(withRouter,withFirebase)(SignUpPage);

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpView);



