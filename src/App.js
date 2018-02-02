import React, { Component } from 'react';
import { v4 } from 'uuid';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: true,
			user: {
				name: {
					first: "Adam",
					last: "Macdonald"
				}
			},
			notebooks: [
				{
					id: v4(),
					name: "School",
					active: true,
					notes: [
						{
							id: v4(),
							name: "Upcoming Projects",
							content: new EditorState.createWithContent(this.convertHTMLToEditorState("<p><strong>Programming</strong></p><ul><li>Java OOP Bank Assignment (Feb 3)</li><li>Group Java Spring API Assignment (Feb 20)</li></ul><p><strong>User-Centered Design</strong></p><ul><li>Empathy Map Assignment (Feb 5)</li><li>User Personas Assignment (Feb 12)</li></ul><p><strong>Miscellaneous</strong></p><ul><li>Graduate School Essay</li></ul>")),
							datetime_updated: new Date('January 29, 2018 11:24:00'),
							active: true
						},
						{
							id: v4(),
							name: "Graduate School Essay",
							content: new EditorState.createWithContent(this.convertHTMLToEditorState("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li>Maecenas sed tellus eleifend magna.</li><li>Morbi quam ligula, dictum sed.</li><li>Mauris tincidunt augue vitae volutpat.</li></ul><p>Suspendisse urna ipsum, bibendum quis nunc ac, tempor tincidunt ipsum. Vestibulum eu iaculis dui, at porta orci. In ornare faucibus congue. Etiam in commodo lorem. Vestibulum volutpat, justo vitae viverra tincidunt, est nibh porta nulla.</p>")),
							datetime_updated: new Date('January 27, 2018 18:03:33'),
							active: false
						},
						{
							id: v4(),
							name: "Class Schedule",
							content: new EditorState.createWithContent(this.convertHTMLToEditorState("<p><strong>Monday</strong></p><p>10am–12pm / Programming / Room COP 1203</p><p><strong>Tuesday</strong></p><p>1pm–3:15pm / User-Centered Design / Room VAB 205</p><p><strong>Friday</strong></p><p>10am–12pm / Programming / Room COP 1203</p>")),
							datetime_updated: new Date('December 29, 2017 08:54:00'),
							active: false
						}
					]
				},
				{
					id: v4(),
					name: "Work",
					active: false,
					notes: [
						{
							id: v4(),
							name: "Work To-Do",
							content: new EditorState.createWithContent(this.convertHTMLToEditorState("<p><strong>Sales & Marketing</strong></p><ul><li>Design and develop e-mails and corresponding landing pages for lead generation.</li><li>Social media marketing</li></ul><p><strong>Human Resources</strong></p><ul><li>Design and develop internal e-mail template</li><li>Find a photo for LinkedIn ad</li></ul>")),
							datetime_updated: new Date('January 26, 2018 09:32:20'),
							active: true
						}
					]
				}
			]
		}
		this.notebookChange = this.notebookChange.bind(this);
		this.notebookRename = this.notebookRename.bind(this);
		this.noteChange = this.noteChange.bind(this);
		this.noteRename = this.noteRename.bind(this);
		this.noteEditorChange = this.noteEditorChange.bind(this);
	}

	// converts html to an editor state object
	// needed for our static initial state
	convertHTMLToEditorState(html) {
		const blocksFromHtml = convertFromHTML(html);
		const content = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);
		return content;
	}

	notebookChange(id) {
		const notebooks = Object.assign({}, this.state).notebooks;

		// set current 'active' notebook to active=false
		// set 'selected' notebook to active=true
		notebooks.find(notebook => notebook.active).active = false;
		notebooks.find(notebook => (notebook.id === id)).active = true;

		this.setState({notebooks});
	}

	notebookRename(id, name) {
		const notebooks = Object.assign({}, this.state).notebooks;

		// find notebook based on id, change it's name, and sort array into alphabetical order
		notebooks.find(notebook => (notebook.id === id)).name = name;
		notebooks.sort((a, b) => {
			a = a.name.toUpperCase();
			b = b.name.toUpperCase();
			if (a < b) {
				return -1
			} else {
				return 1;
			}
		});

		this.setState({notebooks});
	}

	noteChange(id) {
		const notebooks = Object.assign({}, this.state).notebooks;

		// set current 'active' note in the current 'active' notebook to active=false
		// set 'selected' note in the 'active' notebook to active=true
		notebooks.find(notebook => notebook.active)
			.notes.find(note => note.active).active = false;
		notebooks.find(notebook => notebook.active)
			.notes.find(note => (note.id === id)).active = true;

		this.setState({notebooks});
	}

	noteRename(id, name) {
		const notebooks = Object.assign({}, this.state).notebooks;

		// find notebook that is active, then find note based on id, change it's name and datetime_updated, and sort array into date last updated
		notebooks.find(notebook => notebook.active)
			.notes.find(note => (note.id === id)).name = name;
		notebooks.find(notebook => notebook.active)
			.notes.find(note => (note.id === id)).datetime_updated = new Date();
		notebooks.find(notebook => notebook.active)
			.notes.sort((a, b) => {
				if (a.datetime_updated < b.datetime_updated) {
					return 1;
				} else {
					return -1;
				}
			});

		this.setState({notebooks});
	}

	noteEditorChange(id, editorState) {
		const notebooks = Object.assign({}, this.state).notebooks;

		// find note with selected id that is in the 'active' notebooks
		// set content to new editorState
		notebooks.find(notebook => notebook.active)
			.notes.find(note => (note.id === id)).content = editorState;

		this.setState({notebooks});
	}

	render() {
		return (
			<div className="app">
				<Nav user={this.state.user} />
				<Dashboard
					notebooks={this.state.notebooks}
					onNotebookChange={this.notebookChange}
					onNotebookRename={this.notebookRename}
					onNoteChange={this.noteChange}
					onNoteRename={this.noteRename}
					onNoteEditorChange={this.noteEditorChange} />
			</div>
		);
	}

}

export default App;
