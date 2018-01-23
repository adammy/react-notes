import React, { Component } from 'react';
import Notebook from './Notebook';
import './NotebookList.css';

class NotebookList extends Component {

	constructor() {
		super();
		this.notebooks = [
			{ "name": "School" },
			{ "name": "Work" },
			{ "name": "Personal" }
		];
	}

	addToNotebook() {
		this.notebooks.push({ "name": "Untitled" });
		console.log(this.notebooks);
	}

	renameNotebook() {

	}

	render() {

		return (

			<div id="notebooks" className="panel">

				<h2>Notebooks</h2>

				<div className="selections">
					{this.notebooks.map((notebook, index) => {
						return <Notebook name={notebook.name} index={index} />;
					})}
				</div>

				<div className="addition">
					<span className="fa fa-plus-circle"></span> Add a Notebook
				</div>

			</div>

		);
	}

}

export default NotebookList;
