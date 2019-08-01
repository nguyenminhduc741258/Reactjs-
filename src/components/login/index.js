import React, {Component} from 'react';
import './style.scss';
import * as actions from './../../actions/index';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Left extends Component{

    constructor (props){
        super(props);
		this.handleChange = this.handleChange.bind(this);
	    this.state = {
	    		email:'',
		    	password:'',

        };     
    }
    onSave = (e) =>{
        e.preventDefault();
        this.props.onLogin(this.state.email,this.state.password);
    }
    handleChange(event){
    	this.setState({
    		[event.target.name]:event.target.value
    	})
	}
	render(){

        var { email, password } = this.state;

		return(
            <div className="App">
            <div className="App_Aside">
                <img src="https://www.terralogic.com/img/terra-logo.png" className="image"/>
                <label className="line" ><b>WE ARE FAMILY</b></label>
            <label className="logo" ><b>@2019 Terralogic Inc</b></label>
         
            </div>
            <div className="App__Form">
                <form   onSubmit ={this.onSave} >

                    <label class="FormField__Label" > login</label>
                    <div class="FormField__User">
                        <label for="uname"><b>Email</b></label>
                        <input 
                         type="text" name="email" placeholder="Enter email" value={email} onChange={this.handleChange} />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" name="password" placeholder="Enter password"  value={password}  onChange={this.handleChange} />
                        <button className="bt-login" type="Submit">LOGIN</button>
                        <Link to= "/register">
                        <button className="bt-loginsu" type="singin">SING UP</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
				
		);
	}
}
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return{
		onLogin : (email, password) =>{
			dispatch(actions.loginAPI(email, password));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Left);