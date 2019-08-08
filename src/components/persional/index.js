import React, { Component } from 'react';
import './style.scss';
import * as actions from './../../actions/index';
import {connect} from 'react-redux';


class Persional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_name: '',
            display_info: '',
            phone: '',

        }
        this.onChange = this.onChange.bind(this);
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }


    onUpdate = (e) => {
        e.preventDefault();
        this.props.onUpdateProfile(this.state);
    }

    componentWillMount() {
        this.props.onGetProfile();
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        var { profile } = nextProps;
        this.setState ({
            display_name : profile.display_name,
            display_info : profile.display_info,
            phone : profile.phone
        });
    }
   
    render() {

        var { display_name, display_info, phone } = this.state;

        return (
            <div className="App">
                
                <div className= "forminfotion"  onSubmit = {this.onSave}>

                    <div class="container" >
                        <img src="https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png" className="avatar" />
                    </div>
                    <div class="Forminfo__left">
                        <label for="uname"><b>Displayname</b></label>
                        <input type="text" placeholder="Enter Username" value={display_name} name="display_name"  onChange={this.onChange}  />

                        <label for="psw"><b>Email</b></label>
                        <input type="Email" placeholder="Enter Email" name="eml"  onChange={this.onChange} />
                        <label for="psw"><b>Enter Password</b></label>
                        <input type="password" placeholder="New Password" name="password"  
                         onChange={this.onChange}/>
                       
                       

                    </div>
                    <div className="Forminfo__right" >
                        <label for="name"><b>Your Info</b></label>
                        <input type="text" placeholder="Enter Info"  value={display_info} name="display_info"  onChange={this.onChange} />
                        <label for="psw"><b>Phone Number</b></label>
                        <input type="phone" placeholder="Enter Phone" name="phone" value ={phone}  onChange={this.onChange} />
                        <label for="psw"><b>Comfim Password</b></label>
                        <input type="password" placeholder="Enter Password" name="typepassword"   onChange={this.onChange}/>



                        <button className="bt-save"  onClick={this.onUpdate}>UPDATE PROFILE</button>
                    </div>

                </div>
        </div>
    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProfile: () => {
            dispatch(actions.getProfileRequest());
        },

        onUpdateProfile: (state) => {
            dispatch(actions.updateProfileRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persional);

