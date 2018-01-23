import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {

	render() {
		return (
			<nav>
				<h1>SimpleNote</h1>
				<ul>
					<li><a href="#">Hi, Adam</a></li>
					<li><a href="#">Logout</a></li>
				</ul>
				<div className="clearfix"></div>
			</nav>
		);
	}
	
}

export default Nav;
