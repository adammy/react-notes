import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';

import './style.css';

const Notebooks = ({ notebooks = [], onNotebookChange = (f => f), onNotebookRename = (f => f) }) => {

	return (
		<div id="notebooks" className="panel">
			<h2>Notebooks</h2>
			<div className="selections">
				{notebooks.map(notebook =>

					<div
						className={notebook.active ? 'item active' : 'item'}
						key={notebook.id}
						onClick={() => onNotebookChange(notebook.id)}>

						<div className="title">{notebook.name}</div>

						<div className="actions">
							<FontAwesomeIcon icon={faEdit} onClick={(e) => {
								e.stopPropagation();
								onNotebookRename(notebook.id, prompt(`Rename ${notebook.name} to:`) || notebook.name);
							}} />
							<FontAwesomeIcon icon={faTrash} />
						</div>

					</div>

				)}
			</div>
		</div>
	);

};

Notebooks.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object),
	onNotebookChange: PropTypes.func
};

export default Notebooks;
