import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { SignInPage } from '../../containers/signin';
import { SignUp } from '../../containers/signup';
import { StatisticPage } from '../../containers/statistic';
import { AddQuestionPage } from '../../containers/addQuestion';
import { TestingPage } from '../../containers/testing';
import { ScorePage } from '../../containers/score';
import { QuestionsPage } from '../../containers/questionList';
import { Navigation } from '../../containers/navigation';
import { HomePage } from '../../containers/home';

import { withFirebase } from '../../firebase';

import "antd/dist/antd.css";
import "./index.scss";

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends Component {
    render() {
        return(
            <Router>
                <Layout className="site-layout">
                    <Navigation  />
                    <Layout>
                        <Header className="site-layout_background">
                            Testing
                        </Header>
                        <Content className="site-layout_background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}>
                            <Route exact path={ROUTES.HOME} component={HomePage} />
                            <Route path={ROUTES.SIGN_UP} component={SignUp} />
                            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                            <Route path={ROUTES.ADD_QUESTIONS} component={AddQuestionPage} />
                            <Route path={ROUTES.START_TESTING} component={TestingPage} />
                            <Route path={ROUTES.SCORE} component={ScorePage} />
                            <Route path={ROUTES.QUESTIONS_LIST} component={QuestionsPage} />
                            <Route path={ROUTES.STATISTIC} component={StatisticPage} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Testing app ©2020 Created by Valerii Zavaruiev</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default withFirebase(App);