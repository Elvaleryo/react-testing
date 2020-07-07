import React  from 'react';
import { Button, Space } from 'antd';
import * as ROUTES from '../../constants/routes';

export function HomeGuest() {
    return (
        <Space>
            <Button
                href={ROUTES.SIGN_IN}
                type="primary"
            >
                Sign in
            </Button>
            <Button
                href={ROUTES.SIGN_UP}
                type="primary"
                ghost="true"
            >
                Sign up
            </Button>
        </Space>
    )
}
