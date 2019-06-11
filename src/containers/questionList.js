import { connect } from 'react-redux';

import Questions from '../components/questionList';

import { deleteQuestion } from '../actions';


const mapStateToProps = (store) => {
    return {
        questions: store.questions,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        delQuestion: (title) => {
            dispatch(deleteQuestion(title));
        }
    };
};

export const QuestionsPage = connect(mapStateToProps, mapDispatchToProps)(Questions);



