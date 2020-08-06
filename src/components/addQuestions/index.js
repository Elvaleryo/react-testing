import React from 'react';
import './index.scss';

import {AddAnswerView} from '../../containers/addAnswers';
import { Form, Input, Button } from 'antd';


export default function addQuestionsForm(props) {
    const { answers, history, onSubmit } = props;

    return (
        <div className="alignCenter question">
            <h1>Add your question</h1>
            <Form
                className="question__form"
                size="middle"
                onFinish={(values) => onSubmit(values, answers, history)}
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

                <AddAnswerView { ...props } />

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