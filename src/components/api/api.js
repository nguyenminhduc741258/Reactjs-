import React, {Component} from 'react';
import axios from 'axios';
export default  class  Loginform extends Component{

    state = { 
        user: []
    }

    componentDidMount (){

        axios.get ('https:/terralogic-training.web.app/api/login') 
            .then( res => {  
                consolee.log(res);
                this.setState ( {user: res.data} ) 
            }); 
    }   


	render(){


		return(
         <h2></h2>
		);
	}
}
export default Loginform;