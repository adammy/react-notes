import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

import './style.css';

const Notes = ({ notebook, onNoteChange = (f => f), onNoteRename = (f => f), onNoteAdd = (f => f), onNoteDelete = (f => f) }) => {

	return (
		<div id="notes" className="panel">
			<h2>Notes in {notebook.getName()} ({notebook.getNotes().length})</h2>
			{notebook.getNotes().length > 0 &&
				<div className="selections">
					{notebook.getNotes().map(note =>
						<div className={note.active ? 'item note active' : 'item note'} key={note.id} onClick={() => onNoteChange(note.id)}>
							<div className="title">{note.name}</div>
							<div className="updated">{moment(note.datetime_updated).fromNow()}</div>
							<div className={note.content.getCurrentContent().getPlainText() ? 'preview' : 'preview empty'}>
								{note.content.getCurrentContent().getPlainText().replace(/^([\s\S]{80}[^\s]*)[\s\S]*/, '$1')}
							</div>
							<div className="actions">
								<FontAwesomeIcon icon={faEdit} onClick={(e) => {
									e.stopPropagation();
									onNoteRename(note.id, prompt(`Rename ${note.name} to:`) || note.name);
								}} />
								<FontAwesomeIcon icon={faTrash} onClick={e => {
									e.stopPropagation();
									return window.confirm(`Are you sure you want to delete the ${note.name} note?`) ? onNoteDelete(note.id) : null;
								}} />
							</div>
						</div>
					)}
				</div>
			}
			<div className="addition" onClick={() => onNoteAdd(prompt(`Name your new note:`) || 'Untitled')}>
				<FontAwesomeIcon icon={faPlusCircle} /> Add a Note
			</div>
		</div>
	);

};

Notes.propTypes = {
	notebook: PropTypes.object,
	onNoteChange: PropTypes.func,
	onNoteAdd: PropTypes.func,
	onNoteDelete: PropTypes.func
};

export default Notes;
