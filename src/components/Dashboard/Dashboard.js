import React from 'react';
import PropTypes from 'prop-types';
import Notebooks from './Notebooks/Notebooks';

const Dashboard = ({ notebooks = [] }) => {
	return (
		<Notebooks notebooks={notebooks} />
	);
};

Dashboard.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object)
};

export default Dashboard;
