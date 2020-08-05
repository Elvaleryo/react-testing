import React  from 'react';
import './index.scss';
import * as ROUTES from "../../constants/routes";

import { Form, Button, Radio } from 'antd';
import classNames from 'classnames';


export default function addQuestionsForm(props) {

    const { userAnswers, score, questions, history } = props;

    let _onClick = () => {
        history.push(ROUTES.START_TESTING);
    };

    let fractionalScore = `${score}/${questions.length}`;

    let questionsTmpl = questions.map((question) => {
        let answersTmpl = question.answers.map((answer) => {
            let isChecked = userAnswers[question.id].answerId === answer.id;
            return  (
                <div className={classNames('question__answer-wrap ', {'correct' : answer.correct})}
                    key={answer.id}>
                    <Radio className="question__check"
                        checked={isChecked}
                        disabled={true}>
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
            <h1>Your score {fractionalScore}</h1>
            <Form
                className="question__form"
                size="middle"
            >
                {questionsTmpl}

                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={_onClick}
                >
                    Try again
                </Button>

            </Form>
        </div>
    )
};