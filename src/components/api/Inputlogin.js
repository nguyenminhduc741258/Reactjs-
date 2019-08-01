import React, {Component} from 'react';
import './style.scss';
import axios from 'axios';


class Left extends Component{

    constructor (props){
        super(props)
        this.state= {
            email: '',
            password: '',
        }


    }
    
    handleChange = event =>{
        event.preventDefault();
        this.setState({
            [event.target.email] : event.target.value,
            [event.target.password] : event.target.value

         })

    }


    handleSubmit =event => {
            event.preventDefault();
            const data = this.state
            
        }   

	render(){
        
        const {email , password} = this.state
        axios({
            method: 'post',
            url: 'https://terralogic-training.web.app/api/login',
            
            data :{
                email : email,
                password : password,
            }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });


		return(
            <div className="App">
            <div className="App_Aside">
                <img src="https://www.terralogic.com/img/terra-logo.png" className="image"/>
                <label className="line" ><b>WE ARE FAMILY</b></label>
            <label className="logo" ><b>@2019 Terralogic Inc</b></label>
         
            </div>
            <div className="App__Form">
                <form onSubmit ={ this.handleSubmit}>

                    <label class="FormField__Label" > login</label>
                    <div class="FormField__User">
                        <label for="uname"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="uname" onChange = {this.handleChange} />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" onChange = {this.handleChange}/>

                        <button className="bt-login" type="Submit">LOGIN</button>
                        <button className="bt-singup" type="singin">SING UP</button>

                    </div>
                </form>
            </div>
        </div>
				
		);
	}
}
export default Left;