import { connect } from 'react-redux';

import Score from '../components/score';


const mapStateToProps = (store) => {

    return {
        userAnswers: store.userAnswers,
        score: store.score,
        questions: store.questions,
    }
};

export const ScorePage = connect(mapStateToProps, null)(Score);



