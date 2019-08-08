import React, {Component} from 'react';
import './style.scss';
import * as actions from './../../actions/index';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import history from './../../../src/history'

class Left extends Component{

    constructor (props){
        super(props);
		this.handleChange = this.handleChange.bind(this);
	    this.state = {
	    		email:'',
                password:'',
                token:'',
                isLoading: false,
        };     
    }
    onSave = (e) =>{
        e.preventDefault();
        this.props.onLogin(this.state.email,this.state.password, this.state.isLoading);
        console.log(this.state.email,this.state.password, this.state.isLoading);
        history.push("/profile");
    }
    handleChange(event){
    	this.setState({
    		[event.target.name]:event.target.value
    	})
    }
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //       isLoading: nextProps.login.isLoading,

    //     });
    //     console.log(nextProps);

    //   }
    
    
	render(){
      
        // if(this.state.isLoading  ){
        //      history.push("/profile");

        // }


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

                    <label class="FormField__loginLabel"> login</label>
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
		login: state.login
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return{
		onLogin : (email , password, isLoading) =>{
			dispatch(actions.loginAPI(email, password));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Left);