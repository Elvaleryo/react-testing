import React, {Component} from "react";
import { Button } from 'antd';


export default class SignOutButton extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.props.signOut;
        this.fb = this.props.firebase;
        this.history = this.props.history;
    }
    render() {
        return(
            <Button
                onClick={() => this.signOut(this.fb,this.history)}
                type="primary"
                ghost="true">
                Sign Out
            </Button>
        )
    }
};

