import React from 'react';
import { Component } from 'react';
import Profile from './pages/profile';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './pages/login';
import Registerpage from './pages/Register';
import { connect } from 'react-redux';


class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  email:'',
                  password:'', 
            };
          }


      render(){      
        return (
              <BrowserRouter>
                     <Route exact path="/profile" component={Profile} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Registerpage} />

              </BrowserRouter>    
        );
}}

export default connect( null, null )  (App);
