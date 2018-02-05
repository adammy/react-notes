import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

import './style.css';

const Notes = ({ notebookName, notes = [], onNoteChange = (f => f), onNoteRename = (f => f), onNoteAdd = (f => f) }) => {

	return (
		<div id="notes" className="panel">
			{notes.length > 0 &&
				<div>
					<h2>Notes in {notebookName}</h2>
					<div className="selections">
						{notes.map(note =>
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
									<FontAwesomeIcon icon={faTrash} />
								</div>
							</div>
						)}
					</div>
				</div>
			}
			<div className="addition" onClick={() => onNoteAdd(prompt(`Name your new note:`) || 'Untitled')}>
				<FontAwesomeIcon icon={faPlusCircle} /> Add a Note
			</div>
		</div>
	);

};

Notes.propTypes = {
	notebookName: PropTypes.string,
	notes: PropTypes.arrayOf(PropTypes.object),
	onNoteChange: PropTypes.func,
	onNoteAdd: PropTypes.func
};

export default Notes;
