import React, {Component} from 'react';

import { Button, Form, Input, Radio } from 'antd';
import { PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';

export default class AddAnswerForm extends Component {

    constructor(props) {
        super(props);
        this.deleteAnswer = this.props.delAnswer;
        this.onChange = this.props.onChange;
        this.addNewAnswer = this.props.addNewAnswer;
        this.onChecked = this.props.onChecked;
        this.state = {
            value: 1,
        };
    }

    render() {

        const {
            answersList,
            count,
        } = this.props;

        const onChangeRadio = (e) => {
            let radioValue = e.target.value;
            this.setState({
                value: radioValue,
            });
            this.onChecked(radioValue);
        };

        let answersListTmpl = !!answersList.length && answersList.map((answer) => {
            return  (
                <div className="question__answer-wrap"
                    key={answer.id}>
                    <Radio className="question__check"
                    value={answer.id}/>
                    <Form.Item
                        className="question__input"
                        onChange={(e) => this.onChange(e, answer.id)}
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
                        onClick={() => this.deleteAnswer(answer.id, count)}/>
                </div>
            )
        });

        return (
            <div className="question__answers-wrap">
                <Button
                    className="question__add-new"
                    onClick={() => this.addNewAnswer(count)}
                    type="link"
                    icon={<PlusCircleOutlined />}>
                    Add new answer variation
                </Button>
                <Radio.Group onChange={onChangeRadio}  value={this.state.value}>
                    {!!answersListTmpl && answersListTmpl}
                </Radio.Group>
            </div>
        )
    }
}








