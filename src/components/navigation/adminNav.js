import React from 'react';

import { SignOutButton } from '../../containers/signout';
import * as ROUTES from '../../constants/routes';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';


export function AdminNav() {
    return(
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
                <Link to={ROUTES.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={ROUTES.START_TESTING}>Start testing</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to={ROUTES.ADD_QUESTIONS}>Add questions</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to={ROUTES.QUESTIONS_LIST}>All questions</Link>
            </Menu.Item>

            <Menu.Item key="6" className="nav__signout">
                <SignOutButton/>
            </Menu.Item>
        </Menu>
    )
}


