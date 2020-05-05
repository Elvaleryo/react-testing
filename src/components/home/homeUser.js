import { Button } from 'grommet/es6';
import React, { Component } from 'react';
import * as ROUTES from "../../constants/routes";

export class HomeUser extends Component {
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

