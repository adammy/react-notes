import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Modal from 'react-responsive-modal';
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
							content: "<p><strong>Programming</strong></p><ul><li>Java OOP Bank Assignment (Feb 3)</li><li>Group Java Spring API Assignment (Feb 20)</li></ul><p><strong>User-Centered Design</strong></p><ul><li>Empathy Map Assignment (Feb 5)</li><li>User Personas Assignment (Feb 12)</li></ul><p><strong>Miscellaneous</strong></p><ul><li>Graduate School Essay</li></ul>",
							datetime_updated: new Date('January 29, 2018 11:24:00'),
							active: true
						},
						{
							id: v4(),
							name: "Graduate School Essay",
							content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li>Maecenas sed tellus eleifend magna.</li><li>Morbi quam ligula, dictum sed.</li><li>Mauris tincidunt augue vitae volutpat.</li></ul><p>Suspendisse urna ipsum, bibendum quis nunc ac, tempor tincidunt ipsum. Vestibulum eu iaculis dui, at porta orci. In ornare faucibus congue. Etiam in commodo lorem. Vestibulum volutpat, justo vitae viverra tincidunt, est nibh porta nulla.</p>",
							datetime_updated: new Date('January 27, 2018 18:03:33'),
							active: false
						},
						{
							id: v4(),
							name: "Class Schedule",
							content: "<p><strong>Monday</strong></p><p>10am–12pm / Programming / Room COP 1203</p><p><strong>Tuesday</strong></p><p>1pm–3:15pm / User-Centered Design / Room VAB 205</p><p><strong>Friday</strong></p><p>10am–12pm / Programming / Room COP 1203</p>",
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
							content: "<p><strong>Sales & Marketing</strong></p><ul><li>Design and develop e-mails and corresponding landing pages for lead generation.</li><li>Social media marketing</li></ul><p><strong>Human Resources</strong></p><ul><li>Design and develop internal e-mail template</li><li>Find a photo for LinkedIn ad</li></ul>",
							datetime_updated: new Date('January 26, 2018 09:32:20'),
							active: true
						}
					]
				}
			]
		}
		this.notebookChange = this.notebookChange.bind(this);
		this.noteChange = this.noteChange.bind(this);
	}

	onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

	notebookChange(id) {
		const notebooks = this.state.notebooks.map(notebook => {
			return (notebook.id !== id) ? {
				...notebook,
				active: false
			} : {
				...notebook,
				active: true
			}
		});
		this.setState({notebooks});
	}

	noteChange(id) {
		const notes = this.state.notebooks.find(notebook => notebook.active).notes.map(note => {
			return (note.id !== id) ? {
				...note,
				active: false
			} : {
				...note,
				active: true
			}
		});
		const notebooks = this.state.notebooks.map(notebook => {
			if (notebook.active) {
				return {
					...notebook,
					notes: notes
				}
			} else {
				return {
					...notebook
				}
			}
		});
		this.setState({notebooks});
	}

	render() {

		const { notebookChange, noteChange } = this;
		const { user, notebooks, open } = this.state;

		return (
			<div className="app">
				<Modal open={open} onClose={this.onCloseModal} little>
          <h1>Work in Progress</h1>
					<p>Hi there! This React project is a work in progress, so not all of the potential features exist yet. This is more like a minimum viable product (MVP) at this point in its development. Just a friendly heads up.</p>
        </Modal>
				<Nav user={user} />
				<Dashboard notebooks={notebooks} onNotebookChange={notebookChange} onNoteChange={noteChange} />
			</div>
		);

	}

}

export default App;
