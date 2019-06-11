import React, { Component } from 'react';
import { Box, TextInput, Grommet, Button, Text } from 'grommet';
import './signin.scss';
import {customTheme} from '../groomet-themes';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';


import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';


export default class SignInPage extends Component {
    render() {
        return(
            <div>
                <h1>SignIn</h1>
                <SignInForm />
            </div>
        )
    }
};

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }


    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

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
                        <form  onSubmit={this.onSubmit}>
                            <TextInput
                                className="sign__input"
                                value={email}
                                name='email'
                                placeholder='Email'
                                size='medium'
                                margin="small"
                                onChange={this.onChange}
                            />
                            <TextInput
                                className="sign__input"
                                value={password}
                                name='password'
                                placeholder='Password'
                                size='medium'
                                margin="small"
                                onChange={this.onChange}
                            />
                            <Button primary
                                    type="submit"
                                    label="Sign In"
                                    margin="small"
                                    disabled={isInvalid}
                            />
                            <Text>
                                {error && <p>{error.message}</p>}
                            </Text>
                        </form>

                    </Box>
                </Box>
            </Grommet>
        )
    }
};


export const SignInForm = compose(withRouter,withFirebase)(SignInFormBase);

