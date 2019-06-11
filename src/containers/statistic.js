import { connect } from 'react-redux';

import Statistic from '../components/statistic';



const mapStateToProps = (store) => {

    return {
        email: store.user,
        admin: store.admin,
        history: store.userAnswers.filter(item => item.user === store.user),
        allHistory: store.userAnswers,
    }
};


export const StatisticPage = connect(mapStateToProps, null)(Statistic);



