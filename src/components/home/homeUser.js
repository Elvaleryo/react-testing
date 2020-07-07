import React  from 'react';
import { Button } from 'antd';
import * as ROUTES from '../../constants/routes';


export function HomeUser() {
    return (
        <Button
            href={ROUTES.START_TESTING}
            type="primary"
        >
            Start testing
        </Button>
    )
}

