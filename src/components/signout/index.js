import React from "react";
import { Button } from 'antd';

export default function SignOutButton(props) {
    const { signOut, firebase, history} = props;

    return(
        <Button
            onClick={() => signOut(firebase, history)}
            type="primary"
            ghost="true">
            Sign Out
        </Button>
    )
};

