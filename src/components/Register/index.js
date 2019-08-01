import React, { Component } from 'react';
import './style.scss';
import './typepass.js';
import {connect} from 'react-redux';
import * as actions from './../../actions/index';

class Register extends Component {

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
        this.props.onRegister(this.state.email,this.state.password);
    }
    handleChange(event){
    	this.setState({
    		[event.target.name]:event.target.value
    	})
	}


    render(){
        var { email, password } = this.state ;
            return (
                
                <div className="App">
             
                <div className="AppForm">
                    <form onSubmit ={this.onSave}>
    
                        <div class="imgcontainer" >
                            <img src="https://i.ytimg.com/vi/ONVSDoINYbs/maxresdefault.jpg" className="ava"/>
                        </div>
                        <div class="FormField__U">
                            <label for="uname"><b>Username</b></label>
                            < input type="text" name="email" placeholder="Enter email" value={email} onChange={this.handleChange} />
    
                            <label for="psw"><b>Password</b></label>
                            <input type="password" name="password" placeholder="Enter password"  value={password} id = "password"  onChange={this.handleChange}/>
                            <label for="typepassword"><b>Enter Password</b></label>
                            <input type="password" placeholder="Confirm Password" id="confirm_password" />
                           
                            <button className="singup" type="Submit">REGISTER</button>
                            <label className="logoo" ><b>@2019 Terralogic Inc</b></label>
    
                        </div>
                    </form>
                </div>
            </div>
        );
    
            
    }}
    const mapStateToProps = (state) => {
        return {
            tasks: state.tasks
        }
        };
   
    const mapDispatchToProps = (dispatch, props) => {
        return{
            onRegister : (email, password) =>{
                dispatch(actions.RegisterAPI(email, password));
            }
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Register);
    
