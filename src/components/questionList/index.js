import React, { Component } from 'react';
import './index.scss';
import * as ROUTES from "../../constants/routes";

import { Form, Input, Button, Radio } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


export default class addQuestionsForm extends Component {

    constructor(props) {
        super(props);
        this.deleteQuestion = this.props.delQuestion;
    }

    render() {

        const { questions, history } = this.props;

        let _onClick = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            history.push(ROUTES.ADD_QUESTIONS);
        };

        let questionsTmpl = questions.map((question) => {
            let answersTmpl = question.answers.map((answer) => {
                return  (
                    <div className="question__answer-wrap"
                        key={answer.id}>
                        <Radio className="question__check"
                            checked={answer.correct}
                        disabled={true}/>
                        <Form.Item
                            className="question__input"
                        >
                            <Input
                                placeholder="Answer"
                                value={answer.value}
                                disabled={true}
                            />
                        </Form.Item>
                    </div>
                )
            });
            return (
                <div key={question.id} className="questions__wrap">
                    <CloseOutlined
                        className="questions__del-ico"
                        onClick={() => this.deleteQuestion(question.id)}/>
                    <h1 className="questions__title">
                        {question.title}
                    </h1>
                    {answersTmpl}
                </div>
            );
        });

        return (
            <div className="alignCenter question">
                <h1>All questions</h1>
                <Form
                    className="question__form"
                    size="middle"
                >
                    {questionsTmpl}

                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={(e) => _onClick(e)}
                    >
                        Add new
                    </Button>
                </Form>
            </div>
        )
    }
}