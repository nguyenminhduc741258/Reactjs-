import React, { Component } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './style.scss';
import Persional from '../../components/persional';
class Profile extends Component {


    render() {
        return (          

            <div >
                <Header />
                <Persional></Persional>
                <Footer  />
            </div>
         
        );
    }
}

export default Profile;
