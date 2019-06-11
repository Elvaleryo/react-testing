import { connect } from 'react-redux';
import { saveQuestion } from '../actions';

import addQuestionsForm from '../components/addQuestions';
import * as ROUTES from "../constants/routes";

import uuidv4 from 'uuid/v4';


const mapStateToProps = (store, ownProps) => {
    return {
        answers: store.tempAnswers,
    }
};

function validate(obj) {
    let empAnsw = obj.answers.filter(item => item.value === "");
    let checkEmpty = obj.answers.filter(item => item.correct === true);
    return empAnsw.length > 0 || checkEmpty.length === 0 || obj.title === '';
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e,question,answers,history) => {
            e.preventDefault();
            let key = uuidv4();

            let questionObj = {
                key: key,
                title: question,
                answers: answers,
            };

            if (!validate(questionObj)) {
                let currentQuestions = !!localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).questions : [];
                currentQuestions.push(questionObj);
                dispatch(saveQuestion(question,key));
                history.push(ROUTES.QUESTIONS_LIST);
            }

        },
    };
};


export const AddQuestionPage = connect(mapStateToProps, mapDispatchToProps)(addQuestionsForm);



