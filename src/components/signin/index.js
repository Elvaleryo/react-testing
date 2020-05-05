import React, { Component } from 'react';
import './signin.scss';
import { Form, Input, Button, Row, Col } from 'antd';


const INITIAL_STATE = {
    email: '',
    password: '',
};

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        const { error, history, onSubmit, firebase } = this.props;

        return (
            <Row justify="center">
                <Col span={8}>
                    <div className="alignCenter">
                        <h1>SignIn</h1>
                        <Form
                            onFinish={(values) => onSubmit(values, firebase, history)}
                            size="middle"
                        >
                            <Form.Item
                                className="sign__input"
                                name="email"
                                onChange={this.onChange}
                                required="true"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                ]}
                            >
                                <Input
                                    value={this.state.email}
                                    placeholder="Email"
                                />
                            </Form.Item>

                            <Form.Item
                                className="sign__input"
                                name='password'
                                onChange={this.onChange}
                                required="true"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    value={this.state.password}
                                    placeholder='Password'
                                />
                            </Form.Item>

                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Sign in
                            </Button>
                            <p>
                                {error}
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        )
    }
}


