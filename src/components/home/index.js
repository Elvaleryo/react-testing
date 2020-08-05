import React  from 'react';

import {HomeGuest} from './homeGuest';
import {HomeUser} from './homeUser';


export default function Home(props) {
    const { history, logged } = props;
    const Home = logged ? <HomeUser history={history}/> : <HomeGuest history={history}/>;
    return (
        <div className="alignCenter">
            <div>
                <h2>
                    HELLO<br/>
                    IT'S TESTING APP
                </h2>
            </div>
            <div>
                {Home}
            </div>
        </div>
    )
}