import React, { Component }from 'react';
import {Box, Button, Grommet, Layer, Text} from 'grommet';
import { Link } from 'react-router-dom';
import { Apps, Close } from 'grommet-icons';
import './index.scss';

import { SignOutButton } from '../../containers/signout';
import * as ROUTES from '../../constants/routes';



class NavigationAuth extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.props.close;
    }
    render() {

        const {admin} = this.props;
        if (admin) {
            return(
                <Layer position='left' full='vertical' modal={false} plain={true} onClickOutside={this.onClose}>
                    <Close className="nav__close" onClick={this.onClose}/>
                    <Box background='brand' fill='vertical'  className="nav__wrap">
                        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                            <Text size='large'>Menu</Text>
                        </Box>



                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Button
                                    hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                                    <Text size='large'>
                                        <Link to={ROUTES.HOME}>Home</Link>
                                    </Text>
                                </Button>

                            </Box>


                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.START_TESTING}>Start testing</Link>
                                </Text>
                            </Box>
                        </Button>

                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.ADD_QUESTIONS}>Add questions</Link>
                                </Text>
                            </Box>
                        </Button>

                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.QUESTIONS_LIST}>All questions</Link>
                                </Text>
                            </Box>
                        </Button>
                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.STATISTIC}>Statistic</Link>
                                </Text>
                            </Box>
                        </Button>

                        <SignOutButton/>
                    </Box>
                </Layer>
            )
        } else {
            return(
                <Layer position='left' full='vertical' modal={false} plain={true} onClickOutside={this.onClose}>
                    <Close className="nav__close" onClick={this.onClose}/>
                    <Box background='brand' fill='vertical'  className="nav__wrap">
                        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                            <Text size='large'>Menu</Text>
                        </Box>

                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.HOME}>Home</Link>
                                </Text>
                            </Box>
                        </Button>

                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.START_TESTING}>Start testing</Link>
                                </Text>
                            </Box>
                        </Button>

                        <Button
                            hoverIndicator={{ background: 'light-5' }} onClick={this.onClose}>
                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                <Text size='large'>
                                    <Link to={ROUTES.STATISTIC}>Statistic</Link>
                                </Text>
                            </Box>
                        </Button>

                        <SignOutButton/>
                    </Box>
                </Layer>
            )
        }

    }
}

class NavigationNonAuth extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.props.close;
    }
    render() {
        return(
            <Layer position='left' full='vertical' modal={false} plain={true} onClickOutside={this.onClose}>
                <Close className="nav__close" onClick={this.onClose}/>
                <Box background='brand' fill='vertical'>
                    <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                        <Text size='large'>Menu</Text>
                    </Box>

                    <Button
                        hoverIndicator={{ background: 'light-5' }}>
                        <Box pad={{ horizontal: 'medium', vertical: 'small' }} onClick={this.onClose}>
                            <Text size='large'>
                                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                            </Text>
                        </Box>
                    </Button>

                    <Button
                        hoverIndicator={{ background: 'light-5' }}>
                        <Box pad={{ horizontal: 'medium', vertical: 'small' }} onClick={this.onClose}>
                            <Text size='large'>
                                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                            </Text>
                        </Box>
                    </Button>

                </Box>
            </Layer>
        )
    }
}


export default class NavigationPage extends Component {
    render() {

        let authUs =  this.props.logged;
        let admin = this.props.admin;


        const { showMenu, hideMenu, menuOpen } = this.props;
        let Nav = menuOpen && (authUs ? <NavigationAuth admin={admin}  close={hideMenu}/> : <NavigationNonAuth  close={hideMenu}/>);
        return(
            <Grommet className="nav">
              <Box>
                   <Apps className="nav__show"
                       onClick={showMenu}/>
              </Box>
                {Nav}
            </Grommet>

        );
    }
}


