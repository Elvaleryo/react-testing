import React, { useState, useEffect } from 'react';

import { Button, Form, Input, Radio } from 'antd';
import { PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';

export default function AddAnswerForm(props) {

    const {
        answersList,
        count,
        deleteAnswer,
        onChange,
        addNewAnswer,
        onChecked
    } = props;

    const [radioValue, setRadioValue] = useState(null);

    useEffect(() => {
        onChecked(radioValue);
    });


    let answersListTmpl = !!answersList.length && answersList.map((answer) => {
        return  (
            <div className="question__answer-wrap"
                key={answer.id}>
                <Radio className="question__check"
                value={answer.id}/>
                <Form.Item
                    className="question__input"
                    onChange={(e) => onChange(e, answer.id)}
                    required="true"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the answer',
                        },
                    ]}
                >
                    <Input
                        placeholder="Answer"
                    />
                </Form.Item>
                <CloseOutlined
                    className="question__del-ico"
                    onClick={() => deleteAnswer(answer.id, count)}/>
            </div>
        )
    });

    return (
        <div className="question__answers-wrap">
            <Button
                className="question__add-new"
                onClick={() => addNewAnswer(count)}
                type="link"
                icon={<PlusCircleOutlined />}>
                Add new answer variation
            </Button>
            <Radio.Group onChange={(e) => setRadioValue(e.target.value)}  value={radioValue}>
                {!!answersListTmpl && answersListTmpl}
            </Radio.Group>
        </div>
    )
}