import React, { Component } from 'react';
import './style.scss';
import * as actions from './../../actions/index';
import {connect} from 'react-redux';


class Persional extends Component {

    constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	    this.state = {
	    		display_name:'',
				display_info:'',
				phone:'',
				avatar:''

		    };
    }
    handleChange(event){
    	this.setState({
    		[event.target.name]:event.target.value
    	})
    }
    onSave = (e) =>{
        e.preventDefault();
        this.props.onUpdateProfle(this.state.display_info,this.state.display_name,this.state.phone,this.state.avatar);
    }

    render() {
        var { display_name, display_info, phone, avatar } = this.state;
        return (
            <div className="App">
                <div className= "forminfo"  onSubmit = {this.onSave}>

                    <div class="container" >
                        <img src="https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png" className="avatar"  value={avatar} name="avatar" onChange={this.handleChange}/>
                    </div>
                    <div class="FormField__left">
                        <label for="uname"><b>Displayname</b></label>
                        <input type="text" placeholder="Enter Username" value={display_name} name="display_name" onChange={this.handleChange}  />

                        <label for="psw"><b>Email</b></label>
                        <input type="Email" placeholder="Enter Email" name="eml" />
                        <label for="psw"><b>Enter Password</b></label>
                        <input type="password" placeholder="New Password" name="psw" />
                       
                       

                    </div>
                    <div className="Form__right" >
                        <label for="name"><b>Your Info</b></label>
                        <input type="text" placeholder="Enter Info"  value={display_info} name="display_info" onChange={this.handleChange}  />
                        <label for="psw"><b>Phone Number</b></label>
                        <input type="phone" placeholder="Enter Phone" name="phone" value ={phone}  onChange={this.handleChange} />
                        <label for="psw"><b>Comfim Password</b></label>
                        <input type="password" placeholder="Enter Password" name="typsw" />



                        <button className="bt-save" type="Submit">UPDATE PROFILE</button>
                    </div>

                </div>
        </div>
    
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		onUpdateProfle :() =>{
			dispatch(actions.Show_ProfileAPI(this.state));
		}
	}
}

export default connect(null, mapDispatchToProps)(Persional);

