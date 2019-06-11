import { connect } from 'react-redux';

import { checkAnswer, submitAnswers } from '../actions';
import Testing from '../components/testing';
import * as ROUTES from "../constants/routes";
import uuidv4 from 'uuid/v4';




const mapStateToProps = (store) => {

    return {
        answersList: JSON.parse(localStorage.getItem('state')).questions,
        selected: store.selectedAnswers,
    }
};


const mapDispatchToProps = (dispatch,store) => {
    return {
        submitAnswers: (e,answers,questionsCount,history) => {
            e.preventDefault();
            let key = uuidv4();

            if (questionsCount === answers.length) {
                let score = answers.filter(item => item.correct === true);
                let answersCount = answers.length;
                let date = new Date().toLocaleString();
                let scoreStr = `${score.length.toString()}/${answersCount.toString()}`;
                dispatch(submitAnswers(scoreStr,answersCount,key,answers,date));
                history.push(ROUTES.SCORE);
            }
        },

        onChecked: (questionIndex, questionKey, answerIndex, correct) => {
            dispatch(checkAnswer({
                questionKey: questionKey,
                questionIndex: questionIndex,
                answerIndex: answerIndex,
                correct: correct,
            }));
        }

    };
};


export const TestingPage = connect(mapStateToProps, mapDispatchToProps)(Testing);



