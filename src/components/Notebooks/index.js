import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

import './style.css';

const Notebooks = ({ notebooks = [], onNotebookChange = (f => f), onNotebookRename = (f => f), onNotebookAdd = (f => f), onNotebookDelete = (f => f) }) => {

	return (
		<div id="notebooks" className="panel">
			<h2>Notebooks ({notebooks.length})</h2>
			<div className="selections">
				{notebooks.map(notebook =>
					<div className={notebook.active ? 'item active' : 'item'} key={notebook.id} onClick={() => onNotebookChange(notebook.id)}>
						<div className="title">{notebook.name}</div>
						<div className="actions">
							<FontAwesomeIcon icon={faEdit} onClick={e => {
								e.stopPropagation();
								onNotebookRename(notebook.id, prompt(`Rename ${notebook.name} to:`) || notebook.name);
							}} />
							<FontAwesomeIcon icon={faTrash} onClick={e => {
								e.stopPropagation();
								return window.confirm(`Are you sure you want to delete the ${notebook.name} notebook?`) ? onNotebookDelete(notebook.id) : null;
							}} />
						</div>
					</div>
				)}
			</div>
			<div className="addition" onClick={() => onNotebookAdd(prompt(`Name your new notebook:`) || 'Untitled')}>
				<FontAwesomeIcon icon={faPlusCircle} /> Add a Notebook
			</div>
		</div>
	);

};

Notebooks.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object),
	onNotebookChange: PropTypes.func,
	onNotebookAdd: PropTypes.func,
	onNotebookDelete: PropTypes.func
};

export default Notebooks;
