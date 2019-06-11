import { connect } from 'react-redux';


import Home from '../components/home';



const mapStateToProps = (store) => {
    return {
        logged: store.logged,
    }
};



export const HomePage = connect(mapStateToProps, null)(Home);