import { compose } from 'recompose';
import { connect } from 'react-redux';

import SideNavigation from '../components/navigation';

import { withFirebase } from '../firebase';
import {withRouter} from "react-router-dom";


const mapStateToProps = (store) => {
    return {
        logged: store.logged,
        admin: store.admin,
    }
};


const NavigateView = compose(withFirebase,withRouter)(SideNavigation);

export const Navigation = connect(mapStateToProps, null)(NavigateView);