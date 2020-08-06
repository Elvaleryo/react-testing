import React  from 'react';
import { Form, Input, Button } from 'antd';

export default function SignUpPage (props) {

    const { onSubmit, error, history, firebase } = props;

    return (
        <div className="alignCenter">
            <h1>Sign Up</h1>
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
                        }
                    ]}
                >
                    <Input.Password
                        placeholder='Password'
                    />
                </Form.Item>

                <Form.Item
                    className="sign__input"
                    name='confirmPassword'
                    required="true"
                    dependencies={['password']}
                    validateTrigger="onBlur"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder='Confirm password'
                    />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Sign Up
                </Button>
                <p>
                    {error}
                </p>
            </Form>
        </div>
    )
}