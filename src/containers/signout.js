import { compose } from 'recompose';
import { connect } from 'react-redux';

import {userAuth} from "../actions";

import SignOutBtn from '../components/signout';

import { withFirebase } from '../firebase';
import {withRouter} from "react-router-dom";
import * as ROUTES from "../constants/routes";



const mapDispatchToProps = (dispatch) => {
    return {
        signOut: (fb,history) => {
            fb.doSignOut();
            dispatch(userAuth(false,false,false));
            history.push(ROUTES.SIGN_IN);
        }
    }
};

const SignOut = compose(withFirebase,withRouter)(SignOutBtn);

export const SignOutButton = connect(null,mapDispatchToProps)(SignOut);