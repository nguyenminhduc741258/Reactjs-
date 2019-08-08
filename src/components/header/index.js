import React, {Component} from 'react';
import './style.scss';
import { Link } from "react-router-dom";

class Header extends Component{
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
										<Link to ="/"> 
										<a href="#"><p>LOGOUT</p></a>
										</Link>
										</div>
									</div>
							</div>		
			);
			}
}




export default  Header;
