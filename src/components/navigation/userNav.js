import React from 'react';

import { SignOutButton } from '../../containers/signout';
import * as ROUTES from '../../constants/routes';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export function UserNav() {
    return(
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
                <Link to={ROUTES.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={ROUTES.START_TESTING}>Start testing</Link>
            </Menu.Item>
            <div className="nav__signout">
                <SignOutButton/>
            </div>
        </Menu>
    )
}


