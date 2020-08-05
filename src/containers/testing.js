import { connect } from 'react-redux';
import _ from 'lodash';

import { submitAnswers } from '../actions';
import Testing from '../components/testing';
import * as ROUTES from "../constants/routes";




const mapStateToProps = (store) => {

    return {
        questions: store.questions
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userAnswers, history) => {
            if(_.isEmpty(userAnswers)) {
                return;
            }
            let score =_.filter(userAnswers, userAnswer => userAnswer.isCorrect === true).length;
            dispatch(submitAnswers(score, userAnswers));
            history.push(ROUTES.SCORE);
        }
    };
};


export const TestingPage = connect(mapStateToProps, mapDispatchToProps)(Testing);



