import React, {Component} from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			token: '',
		};
	  }
	  onLogout = (e) =>{
		this.props.onLogout(this.state);
	  }       
	render(){
		return(
					<div className=  "headerfrom">
						<div className = "image">
							<img className="imagelogo" src={require("./../../image/head.png") }/>
							</div>
									<div class="dropdown">
										<a>FROFILE</a>
										<div class="dropdown-content">
										<Link to= "/profile">
										<a href="#"><p>PROFILE</p></a>
										</Link>
										<Link to ="/" onClick={this.onLogout}> 
										<a href="#"><p>LOGOUT</p></a>
										</Link>
										</div>
									</div>
							</div>		
			);
			}
}



  const mapDispatchToProps = (dispatch, props) => {
	return{
	  onLogout: () =>{
		dispatch(actions.logoutRequest());
	  }
	}
  }
  export default connect(null, mapDispatchToProps)(Header);
  																																																																																																																							