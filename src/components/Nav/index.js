import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Nav = ({ user }) => {

	return (
		<nav>
			<h1>SimpleNote</h1>
			<ul>
				<li><a href="/profile">Hi, {user.name.first}</a></li>
				<li><a href="/logout">Logout</a></li>
			</ul>
			<div className="clearfix"></div>
		</nav>
	);

};

Nav.propTypes = {
	user: PropTypes.object
};

export default Nav;
