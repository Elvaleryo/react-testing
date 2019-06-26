import { compose } from 'recompose';
import { connect } from 'react-redux';

import { menuOpen } from '../actions';

import NavigationPage from '../components/navigation';

import { withFirebase } from '../firebase';
import {withRouter} from "react-router-dom";


const mapStateToProps = (store) => {
    return {
        logged: store.logged,
        admin: store.admin,
        menuOpen: store.menuOpen,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showMenu: (e) => {
            e.preventDefault();
            dispatch(menuOpen(true));
        },
        hideMenu: (e) => {
            e.preventDefault();
            dispatch(menuOpen(false));
            console.log(213123);
        }
    };
};


const NavigateView = compose(withFirebase,withRouter)(NavigationPage);

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigateView);