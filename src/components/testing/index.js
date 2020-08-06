import React, { useState } from 'react';
import './index.scss';

import { Form, Button, Radio } from 'antd';

export default function addQuestionsForm(props) {

    const [userAnswers, setUserAnswers] = useState({});

    const prevUserAnswers = userAnswers;
    const onChangeRadio = (questionId, answerId,answerCorrect) => {
        setUserAnswers({
            ...prevUserAnswers,
            [questionId]: {
                isCorrect: answerCorrect,
                answerId: answerId
            }
        });
    };

    const { questions, history, onSubmit } = props;

    let questionsTmpl = questions.map((question) => {
        let answersTmpl = question.answers.map((answer) => {
            let isChecked = userAnswers[question.id] && userAnswers[question.id].answerId === answer.id;
            return  (
                <div className="question__answer-wrap"
                    key={answer.id}>
                    <Radio className="question__check"
                        checked={isChecked}

                        onChange={() => onChangeRadio(question.id, answer.id, answer.correct)}>
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
                onFinish={() => onSubmit(userAnswers, history)}
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