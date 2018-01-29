import React from 'react';
import PropTypes from 'prop-types';
import './Notebooks.css';

const Notebooks = ({ notebooks = [] }) => {

	return (
		<div id="notebooks" className="panel">
			<h2>Notebooks</h2>
			<div className="selections">
				{notebooks.map(notebook =>
					<div className={notebook.active ? 'item active' : 'item'} key={notebook.id}>
						<div className="title">{notebook.name}</div>
					</div>
				)}
			</div>
		</div>
	);

};

Notebooks.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object)
};

export default Notebooks;
