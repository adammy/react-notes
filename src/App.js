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
					notes: [
						{
							id: v4(),
							name: "Upcoming Projects",
							content: "<p>This is some mock data.</p>",
							datetime_updated: new Date('December 17, 2017 03:24:00')
						},
						{
							id: v4(),
							name: "Class Schedule",
							content: "<p>My super awesome schedule.</p>",
							datetime_updated: new Date('January 2, 2018 09:24:00')
						}
					]
				},
				{
					id: v4(),
					name: "Work",
					notes: [
						{
							id: v4(),
							name: "Work To-Do",
							content: "<p>This is some mock to-do data.</p>",
							datetime_updated: new Date('December 29, 2017 04:54:00')
						}
					]
				}
			]
		}
	}

  render() {

		let { user, notebooks } = this.state;

		// sort elements by name prop
		notebooks = notebooks.sort((a, b) => (a.name < b.name) ? -1 : 1);

    return (
			<div className="app">
				<Nav name={user.name.first} />
				<Dashboard notebooks={notebooks} />
			</div>
    );

  }

}

export default App;
