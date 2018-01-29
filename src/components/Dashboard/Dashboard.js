import React from 'react';
import PropTypes from 'prop-types';
import Notebooks from './Notebooks/Notebooks';
import Notes from './Notes/Notes';
import NoteEditor from './NoteEditor/NoteEditor';
import './Panels/Panels.css';

const Dashboard = ({ notebooks = [] }) => {

	const notebooksArr = notebooks.map(notebook => {
		return {
			id: notebook.id,
			name: notebook.name,
			active: notebook.active
		};
	});

	const activeNotebookName = notebooks.find(notebook => {
		return notebook.active;
	}).name;

	const notesArr = notebooks.find(notebook => {
		return notebook.active
	}).notes;

	const activeNote = notesArr.find(note => {
		return note.active;
	});

	return (
		<div id="dashboard">
			<Notebooks notebooks={notebooksArr} />
			<Notes notebookName={activeNotebookName} notes={notesArr} />
			<NoteEditor note={activeNote} />
		</div>
	);

};

Dashboard.propTypes = {
	notebooks: PropTypes.arrayOf(PropTypes.object)
};

export default Dashboard;
