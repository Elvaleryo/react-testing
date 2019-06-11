import React, { Component } from 'react';
import { Box, Grommet, Button } from 'grommet';
import {customTheme} from '../groomet-themes';
import * as ROUTES from "../../constants/routes";


class HomeLogged extends Component{
    render() {

        const { history } = this.props;

        const onClickSignIn = (e) => {
            e.preventDefault();
            history.push(ROUTES.SIGN_IN);
        };

        const onClickSignUp= (e) => {
            e.preventDefault();
            history.push(ROUTES.SIGN_UP);
        };


        return (

            <div className='home__btn-wrap'>
                        <Button primary
                                type="submit"
                                label="Sign in"
                                margin="small"
                                onClick={(e) => {onClickSignIn(e,history)}}
                        />

                        <Button primary
                                type="submit"
                                label="Sign up"
                                margin="small"
                                onClick={(e) => {onClickSignUp(e,history)}}
                        />
            </div>
        )
    }

}


class HomeUnLogged extends Component{
    render() {

        const { history } = this.props;

        const onClick = (e) => {
            e.preventDefault();
            history.push(ROUTES.START_TESTING);
        };


        return (


                        <Button primary
                                type="submit"
                                label="Start testing"
                                margin="small"
                                onClick={(e) => {onClick(e,history)}}
                        />

        )
    }

}


export default class Home extends Component {

    render() {

        const { history, logged } = this.props;

        let locStore = JSON.parse(localStorage.getItem('state'));
        let storageLogged = locStore.logged;
        let userLogged = !!storageLogged ? storageLogged : logged;


        let home = userLogged ? <HomeUnLogged history={history}/> : <HomeLogged history={history}/>;

        return (
            <Grommet theme={customTheme}>
                <Box
                    direction="row-responsive"
                    justify="center"
                    align="center"
                    pad="xlarge"
                    background="light"
                    gap="medium"
                >
                    <Box align='center'
                         width='medium'
                         justify='center'
                         pad='large'
                         alignContent='center'
                         background="light-2">

                        <h2>HELLO</h2>
                        <h2>ITS TESTING APP</h2>
                        { home }

                    </Box>
                </Box>
            </Grommet>



        )
    }
}


