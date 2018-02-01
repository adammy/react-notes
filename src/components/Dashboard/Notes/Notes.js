import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Notes.css';

const Notes = ({ notebookName, notes = [], onNoteChange = (f => f) }) => {

	return (
		<div id="notes" className="panel">
			<h2>Notes in {notebookName}</h2>
			<div className="selections">
				{notes.map(note =>
					<div className={note.active ? 'item note active' : 'item note'} key={note.id} onClick={() => onNoteChange(note.id)}>
						<div className="title">{note.name}</div>
						<div className="updated">{moment(note.datetime_updated).fromNow()}</div>
						<div className="preview">This is some preview text for now cause reasons&hellip;</div>
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
