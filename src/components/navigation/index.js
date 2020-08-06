import React from 'react';
import "./index.scss";

import {AdminNav} from './adminNav';
import {UserNav} from './userNav';

import { Layout } from 'antd';
const { Sider } = Layout;

export default function SideNavigation(props) {
    const { admin, logged } = props;
    if(!logged) {
        return null;
    } else {
        const Nav = admin ? <AdminNav/> : <UserNav/>;
        return(
            <div className="nav__wrap">
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    {Nav}
                </Sider>
            </div>
        )
    }
}