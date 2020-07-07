import React  from 'react';
import { Form, Input, Button } from 'antd';

export default function SignIn(props) {
    const { error, history, onSubmit, firebase } = props;

    return (
        <div className="alignCenter ">
            <h1>SignIn</h1>
            <Form
                className="auth"
                size="middle"
                onFinish={(values) => onSubmit(values, firebase, history)}
            >
                <Form.Item
                    className="sign__input"
                    name="email"
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
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item
                    className="sign__input"
                    name='password'
                    required="true"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
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
    )
}


