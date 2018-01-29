import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
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
			notebooks: [
				{
					id: v4(),
					name: "School",
					active: true,
					notes: [
						{
							id: v4(),
							name: "Upcoming Projects",
							content: "<p>This is some mock data.</p>",
							datetime_updated: new Date('January 29, 2018 09:24:00'),
							active: true
						},
						{
							id: v4(),
							name: "Class Schedule",
							content: "<p>My super awesome schedule.</p>",
							datetime_updated: new Date('December 10, 2017 03:24:00'),
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
							content: "<p>This is some mock to-do data.</p>",
							datetime_updated: new Date('December 29, 2017 04:54:00'),
							active: true
						}
					]
				}
			]
		}
		this.notebookChange = this.notebookChange.bind(this);
	}

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

	render() {

		const { notebookChange } = this;
		const { user, notebooks } = this.state;

		return (
			<div className="app">
				<Nav user={user} />
				<Dashboard notebooks={notebooks} onNotebookChange={notebookChange} />
			</div>
		);

	}

}

export default App;
