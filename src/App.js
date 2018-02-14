import React, { Component } from 'react';

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
		this.notebookDelete = this.notebookDelete.bind(this);
		this.noteChange = this.noteChange.bind(this);
		this.noteRename = this.noteRename.bind(this);
		this.noteAdd = this.noteAdd.bind(this);
		this.noteDelete = this.noteDelete.bind(this);
		this.noteEditorChange = this.noteEditorChange.bind(this);
	}

	// modal methods; temporary
	onOpenModal = () => this.setState({ open: true });
	onCloseModal = () => this.setState({ open: false });

	notebookChange(id) {
		const notebooks = Object.assign({}, this.state).notebooks;
		notebooks.setAllNotebooksToInactive().getNotebookByID(id).setToActive();
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
		notebooks.setAllNotebooksToInactive().addNotebook(name).getNotebooks();
		this.setState({notebooks});
	}

	notebookDelete(id) {
		const notebooks = Object.assign({}, this.state).notebooks;
		if (notebooks.getNotebookByID(id).getActive()) {
			notebooks.deleteNotebookByID(id).setAllNotebooksToInactive().setFirstNotebookToActive();
		} else {
			notebooks.deleteNotebookByID(id);
		}
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

	noteDelete(id) {
		const notebooks = Object.assign({}, this.state).notebooks;
		if (notebooks.getActiveNotebook().getNoteByID(id).getActive()) {
			notebooks.getActiveNotebook().deleteNoteByID(id).setAllNotesToInactive().setFirstNoteToActive();
		} else {
			notebooks.getActiveNotebook().deleteNoteByID(id);
		}
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
				<Nav user={this.state.user} />
				<Notebooks notebooks={notebooks.getNotebooks()} onNotebookChange={this.notebookChange} onNotebookRename={this.notebookRename} onNotebookAdd={this.notebookAdd} onNotebookDelete={this.notebookDelete} />
				<Notes notebook={notebooks.getActiveNotebook()} onNoteChange={this.noteChange} onNoteRename={this.noteRename} onNoteAdd={this.noteAdd} onNoteDelete={this.noteDelete} />
				<NoteEditor note={notebooks.getActiveNotebook().getActiveNote()} onNoteEditorChange={this.noteEditorChange} />
			</div>
		);

	}

}

export default App;
