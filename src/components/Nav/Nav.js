import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/fontawesome-free-solid';
import './Nav.css';

const Nav = ({ user }) => {

	return (
		<nav>
			<h1><FontAwesomeIcon icon={faBolt} /> FlashNote</h1>
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
