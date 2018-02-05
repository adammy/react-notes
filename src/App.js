import React, { Component } from 'react';
import Modal from 'react-responsive-modal'; // temporary

import NotebooksData from './data/InitialState';

import Nav from './components/Nav';
import Notebooks from './components/Notebooks';
import Notes from './components/Notes';
import NoteEditor from './components/NoteEditor';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			user: {
				name: {
					first: "Adam",
					last: "Macdonald"
				}
			},
			notebooks: NotebooksData
		}
		this.notebookChange = this.notebookChange.bind(this);
		this.notebookRename = this.notebookRename.bind(this);
		this.notebookAdd = this.notebookAdd.bind(this);
		this.noteChange = this.noteChange.bind(this);
		this.noteRename = this.noteRename.bind(this);
		this.noteAdd = this.noteAdd.bind(this);
		this.noteEditorChange = this.noteEditorChange.bind(this);
	}

	// modal methods; temporary
	onOpenModal = () => this.setState({ open: true });
	onCloseModal = () => this.setState({ open: false });

	notebookChange(id) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.setAllNotebooksToInactive();
		notebooks.getNotebookByID(id).setToActive();
		this.setState({notebooks});
	}

	notebookRename(id, name) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.getNotebookByID(id).setName(name);
		notebooks.getNotebooks();
		this.setState({notebooks});
	}

	notebookAdd(name) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.setAllNotebooksToInactive();
		notebooks.addNotebook(name).getNotebooks();
		this.setState({notebooks});
	}

	noteChange(id) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.getActiveNotebook().setAllNotesToInactive();
		notebooks.getActiveNotebook().getNoteByID(id).setToActive();
		this.setState({notebooks});
	}

	noteRename(id, name) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.getActiveNotebook().getNoteByID(id).setName(name).setDateTimeToNow();
		notebooks.getActiveNotebook().getNotes();
		this.setState({notebooks});
	}

	noteAdd(name) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.getActiveNotebook().setAllNotesToInactive();
		notebooks.getActiveNotebook().addNote(name).getNotes();
		this.setState({notebooks});
	}

	noteEditorChange(id, editorState) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.getActiveNotebook().getNoteByID(id).setContent(editorState).setDateTimeToNow();
		notebooks.getActiveNotebook().getNotes();
		this.setState({notebooks});
	}

	render() {

		const { notebooks } = this.state;

		return (
			<div className="app">
				<Modal open={this.state.open} onClose={this.onCloseModal} little>
					<h1>Work in Progress</h1>
					<p>Hi there! This React project is a work in progress, so not all of the potential features exist yet. This is more like a minimum viable product (MVP) at this point in its development. Just a friendly heads up.</p>
				</Modal>
				<Nav user={this.state.user} />
				<Notebooks notebooks={notebooks.getNotebooks()} onNotebookChange={this.notebookChange} onNotebookRename={this.notebookRename} onNotebookAdd={this.notebookAdd} />
				<Notes notebookName={notebooks.getActiveNotebook().getName()} notes={notebooks.getActiveNotebook().getNotes()} onNoteChange={this.noteChange} onNoteRename={this.noteRename} onNoteAdd={this.noteAdd} />
				<NoteEditor note={notebooks.getActiveNotebook().getActiveNote()} onNoteEditorChange={this.noteEditorChange} />
			</div>
		);

	}

}

export default App;
