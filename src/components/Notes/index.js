import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';

import './style.css';

const Notes = ({ notebookName, notes = [], onNoteChange = (f => f), onNoteRename = (f => f) }) => {

	return (
		<div id="notes" className="panel">

			<h2>Notes in {notebookName}</h2>

			<div className="selections">

				{notes.map(note =>
					<div className={note.active ? 'item note active' : 'item note'} key={note.id} onClick={() => onNoteChange(note.id)}>

						<div className="title">{note.name}</div>
						<div className="updated">{moment(note.datetime_updated).fromNow()}</div>
						<div className="preview">{note.content.getCurrentContent().getPlainText().replace(/^([\s\S]{80}[^\s]*)[\s\S]*/, '$1')}&hellip;</div>

						<div className="actions">
							<FontAwesomeIcon icon={faEdit} onClick={(e) => {
								e.stopPropagation();
								onNoteRename(note.id, prompt(`Rename ${note.name} to:`) || note.name);
							}} />
							<FontAwesomeIcon icon={faTrash} />
						</div>

					</div>
				)}
			</div>

		</div>
	);

};

Notes.propTypes = {
	notebookName: PropTypes.string,
	notes: PropTypes.arrayOf(PropTypes.object),
	onNoteChange: PropTypes.func
};

export default Notes;
