import React, { Component } from 'react';
import './index.scss';

import {AddAnswerView} from '../../containers/addAnswers';
import { Form, Input, Button } from 'antd';


export default class addQuestionsForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit;
    }

    render() {

        const { answers, history } = this.props;

        return (
            <div className="alignCenter question">
                <h1>Add your question</h1>
                <Form
                    className="question__form"
                    size="middle"
                    onFinish={(values) => this.onSubmit(values, answers, history)}
                >
                    <Form.Item
                        className="question__input"
                        name="question"
                        required="true"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your question',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Your question"
                        />
                    </Form.Item>

                    <AddAnswerView { ...this.props } />

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Save question
                    </Button>

                </Form>
            </div>
        )
    }
}


