import React, { Component } from 'react';
import './index.scss';

import { Form, Button, Radio } from 'antd';


const INITIAL_STATE = {
    userAnswers: {},
};

export default class addQuestionsForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit;
        this.state = { ...INITIAL_STATE };
    }

    onChangeRadio = (questionId, answerId,answerCorrect) => {
        this.setState(prevState => {
            return {
                userAnswers: {
                    ...prevState.userAnswers,
                    [questionId]: {
                        isCorrect: answerCorrect,
                        answerId: answerId
                    }
                }
            }
        });
    };

    render() {

        const { questions, history } = this.props;
        const userAnswers = this.state.userAnswers;

        let questionsTmpl = questions.map((question) => {
            let answersTmpl = question.answers.map((answer) => {
                let isChecked = userAnswers[question.id] && userAnswers[question.id].answerId === answer.id;
                return  (
                    <div className="question__answer-wrap"
                        key={answer.id}>
                        <Radio className="question__check"
                            checked={isChecked}

                            onChange={() => this.onChangeRadio(question.id, answer.id, answer.correct)}>
                                {answer.value}
                        </Radio>
                    </div>
                )
            });
            return (
                <div key={question.id} className="questions__wrap">

                    <h1 className="questions__title">
                        {question.title}
                    </h1>
                    {answersTmpl}
                </div>
            );
        });

        return (
            <div className="alignCenter question">
                <Form
                    className="question__form"
                    size="middle"
                    onFinish={() => this.onSubmit(this.state.userAnswers, history)}
                >
                    {questionsTmpl}

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Save
                    </Button>

                </Form>
            </div>
        )
    }
}