import { connect } from 'react-redux';

import Score from '../components/score';

import * as ROUTES from '../constants/routes';



const mapStateToProps = (store) => {

    return {
        count: store.selectedAnswersCount,
        score: store.testResult,
        questions: store.questions,
        userAnswers: store.userAnswers.filter(item => item.user === store.user),
    }
};


const mapDispatchToProps = (dispatch,store) => {
    return {
        onClick: (e,history) => {
            e.preventDefault();
            history.push(ROUTES.START_TESTING);
        }

    };
};



export const ScorePage = connect(mapStateToProps, mapDispatchToProps)(Score);



