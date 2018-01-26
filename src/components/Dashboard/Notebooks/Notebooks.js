import React from 'react';
import PropTypes from 'prop-types';
import '../Panels/Panels.css';
import './Notebooks.css';

const Notebooks = ({ notebooks = [] }) => {
	return (
		<div id="notebooks" className="panel">
			<h2>Notebooks</h2>
			<div className="selections">
				{notebooks.map(notebook =>
					<div className="item" key={notebook.id}>
						<span className="fa fa-trash delete"></span>
						<div className="title">{notebook.name}</div>
					</div>
				)}
			</div>
			<div className="addition"><span className="fa fa-plus-circle"></span> Add A Notebook</div>
		</div>
	);
};

Notebooks.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object)
};

export default Notebooks;
