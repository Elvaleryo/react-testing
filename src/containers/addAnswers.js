import { connect } from 'react-redux';

import { addAnswer, deleteAnswer, changeAnswer, chooseAnswer } from '../actions';
import AddAnswerForm from '../components/addQuestions/addAnswers';
import uuidv4 from 'uuid/v4';



const mapStateToProps = (store, ownProps) => {
    return {
        count: store.tempAnswers.length - 1,
        answersList: store.tempAnswers,
    }
};

const mapDispatchToProps = (dispatch,store) => {
    return {
        addNewAnswer: (count) => {
            let key = uuidv4();
            let newAnswersCount = ++count;
            if (newAnswersCount < 4) {
                let id = `answer-${count}`;
                let answerRes = {
                    key: key,
                    id: id,
                    value: '',
                    correct: false,
                };
                dispatch(addAnswer(answerRes));
            }
        },

        delAnswer: (id,count) => {
            if (count > 0) {
                dispatch(deleteAnswer(+id));
            }
        },

        onChange: (e, index) => {
            dispatch(changeAnswer(e.target.value, index));
        },

        onChecked: (e, index) => {
            dispatch(chooseAnswer(e.target.checked, index));
        }
    };
};



export const AddAnswerPage = connect(mapStateToProps, mapDispatchToProps)(AddAnswerForm);



