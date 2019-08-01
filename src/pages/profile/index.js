import React, { Component } from 'react';
import footer from '../../components/footer';
import header from '../../components/header';
import './style.scss';
import Persional from '../../components/persional';
class Profile extends Component {


    render() {
        return (          

            <div >
                <header/>
                <Persional></Persional>
                <footer/>
            </div>
         
        );
    }
}

export default Profile;
