import { connect } from 'react-redux';
import { saveQuestion } from '../actions';

import addQuestionsForm from '../components/addQuestions';
import * as ROUTES from "../constants/routes";

import uuidv4 from 'uuid/v4';


const mapStateToProps = (store) => {
    return {
        answers: store.newAnswers,
    }
};

function validate(obj) {
    let empAnsw = obj.answers.filter(item => item.value === "");
    let checkEmpty = obj.answers.filter(item => item.correct === true);
    return empAnsw.length > 0 || checkEmpty.length === 0 || obj.title === '';
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, answers, history) => {
            let key = uuidv4();

            let questionObj = {
                id: `question-${key}`,
                title: values.question,
                answers: answers,
            };

            if (!validate(questionObj)) {
                dispatch(saveQuestion(questionObj));
                history.push(ROUTES.QUESTIONS_LIST);
            }
        },
    };
};

export const AddQuestionPage = connect(mapStateToProps, mapDispatchToProps)(addQuestionsForm);
