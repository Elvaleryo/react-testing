import React, {Component} from "react";
import {Box, Button, Text} from "grommet/es6";



export default class SignOutButton extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.props.signOut;
        this.fb = this.props.firebase;
        this.history = this.props.history;
    }
    render() {
        return(
            <Button onClick={(event) => this.signOut(this.fb,this.history)}
                hoverIndicator={{ background: 'light-5' }}>
                <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                    <Text size='large'>
                        Sign Out
                    </Text>
                </Box>
            </Button>
        )
    }
};

