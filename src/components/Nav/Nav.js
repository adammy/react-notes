import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ name }) => {
	return (
		<nav>
			<h1>SimpleNote</h1>
			<ul>
				<li><a href="/profile">Hi, {name}</a></li>
				<li><a href="/logout">Logout</a></li>
			</ul>
			<div className="clearfix"></div>
		</nav>
	);
};

Nav.propTypes = {
	name: PropTypes.string
};

export default Nav;
