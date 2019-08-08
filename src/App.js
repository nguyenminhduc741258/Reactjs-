import React from 'react';
import { Component } from 'react';
import Profile from './pages/profile';
import Login from './pages/login';
import Registerpage from './pages/Register';
import history from './history';

import { Router, Route } from "react-router-dom";

class App extends Component {
     


      render(){      
        return (
              <Router  history={history}>
                     <Route exact path="/profile" component={Profile} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Registerpage} />

              </Router>    
        );
}}

export default  App;
