import React, { Component } from 'react';
import { Button, Space } from 'antd';

export class HomeGuest extends Component {
    render() {

        return (
            <Space>
                <Button
                    href="/signin"
                    type="primary"
                >
                    Sign in
                </Button>
                <Button
                    href="/signup"
                    type="primary"
                    ghost="true"
                >
                    Sign up
                </Button>
            </Space>
        )
    }

}
