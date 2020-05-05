import React, { Component } from 'react';
import {  Row, Col } from 'antd';

import {HomeGuest} from './homeGuest';
import {HomeUser} from './homeUser';


export default class Home extends Component {

    render() {

        const { history, userLogged } = this.props;
        const Home = userLogged ? <HomeUser history={history}/> : <HomeGuest history={history}/>;

        return (
            <>
                <Row align="middle">
                    <Col span={24}>
                        <div className="alignCenter">
                            <h2>
                                HELLO<br/>
                                IT'S TESTING APP
                            </h2>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="alignCenter">
                            {Home}
                        </div>
                    </Col>
                </Row>
            </>

        )
    }
}


