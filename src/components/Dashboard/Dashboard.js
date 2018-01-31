import React from 'react';
import PropTypes from 'prop-types';
import Notebooks from './Notebooks/Notebooks';
import Notes from './Notes/Notes';
import NoteEditor from './NoteEditor/NoteEditor';
import './Panels/Panels.css';

const Dashboard = ({ notebooks = [], onNotebookChange = (f => f), onNoteChange = (f => f) }) => {

	const notebooksArr = notebooks.map(notebook => {
		return {
			id: notebook.id,
			name: notebook.name,
			active: notebook.active
		};
	});
	const activeNotebookName = notebooks.find(notebook => notebook.active).name;
	const notesArr = notebooks.find(notebook => notebook.active).notes;
	const activeNote = notesArr.find(note => note.active);

	return (
		<div id="dashboard">
			<Notebooks notebooks={notebooksArr} onNotebookChange={onNotebookChange} />
			<Notes notebookName={activeNotebookName} notes={notesArr} onNoteChange={onNoteChange} />
			<NoteEditor note={activeNote} />
		</div>
	);

};

Dashboard.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object)
};

export default Dashboard;