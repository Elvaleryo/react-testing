import React, { Component } from 'react';
import { Box, TextInput, Grommet, Button, Text } from 'grommet';
import './signup.scss';
import {customTheme} from '../groomet-themes';


const INITIAL_STATE = {
    email: '',
    password: '',
    confirmPassword: '',
};

export default class SignUpPage extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.fb = this.props.firebase;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, confirmPassword } = this.state;

        const isInvalid =
            password !== confirmPassword ||
            password === '' ||
            email === '';

        const { onSubmit, error, history } = this.props;


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
                        <h1>Sign Up</h1>

                        <form  onSubmit={(event) => onSubmit(event, email, password, this.fb, history)}>
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
                                type="password"
                                onChange={this.onChange}
                            />
                            <TextInput
                                className="sign__input"
                                value={confirmPassword}
                                name='confirmPassword'
                                placeholder='Confirm password'
                                size='medium'
                                margin="small"
                                type="password"

                                onChange={this.onChange}
                            />
                            <Button primary
                                    type="submit"
                                    label="Sign Up"
                                    margin="small"
                                    disabled={isInvalid}
                            />
                            <Text>
                                {<p>{error}</p>}
                            </Text>
                        </form>

                    </Box>
                </Box>
            </Grommet>
        )
    }
}




