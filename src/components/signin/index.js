import React, { Component } from 'react';
import { Box, TextInput, Grommet, Button, Text } from 'grommet';
import './signin.scss';
import {customTheme} from '../groomet-themes';



const INITIAL_STATE = {
    email: '',
    password: '',
};

export default class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = props.onSubmit;
        this.state = { ...INITIAL_STATE };
        this.fb = this.props.firebase;
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        const { error, history } = this.props;


        return (

            <Grommet theme={customTheme}>
                <h1>SignIn</h1>
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
                        <form  onSubmit={(event) => this.onSubmit(event,this.state.email,this.state.password, this.fb, history)}>
                            <TextInput
                                className="sign__input"
                                value={this.state.email}
                                name='email'
                                placeholder='Email'
                                size='medium'
                                margin="small"
                                onChange={this.onChange}
                            />
                            <TextInput
                                className="sign__input"
                                value={this.state.password}
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


