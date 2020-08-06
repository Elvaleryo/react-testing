import { connect } from 'react-redux';

import { addAnswer, deleteAnswer, changeAnswer, chooseAnswer } from '../actions';
import AddAnswerForm from '../components/addQuestions/addAnswers';
import uuidv4 from 'uuid/v4';


const mapStateToProps = (store) => {
    return {
        count: store.newAnswers.length - 1,
        answersList: store.newAnswers,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAnswer: (count) => {
            let newAnswersCount = ++count;
            if (newAnswersCount >= 4) {
                return;
            }

            let key = uuidv4();

            let answer = {
                id: `answer-${key}`,
                value: '',
                correct: false,
            };

            dispatch(addAnswer(answer));
        },

        deleteAnswer: (index, count) => {
            if (count > 0) {
                dispatch(deleteAnswer(index));
            }
        },

        onChange: (e, id) => {
            let value = e.target.value;
            dispatch(changeAnswer(value, id));
        },

        onChecked: (index) => {
            dispatch(chooseAnswer(index));
        }
    };
};



export const AddAnswerView = connect(mapStateToProps, mapDispatchToProps)(AddAnswerForm);



