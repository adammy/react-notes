import Notebook from './Notebook';

class NotebookList {

	constructor() {
		this.notebooks = [];
	}

	getNotebooks(sortBy = 'name') {

		switch (sortBy) {

			case 'name':
				return this.notebooks.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 1);

			default:
				break;

		}

	}

	getNotebookByID(id) {
		return this.notebooks.find(notebook => notebook.id === id);
	}

	getNotebookByName(name) {
		return this.notebooks.find(notebook => notebook.name === name);
	}

	getActiveNotebook() {
		return this.notebooks.find(notebook => notebook.active);
	}

	addNotebook(name) {
		this.setAllNotebooksToInactive();
		this.notebooks.push(new Notebook(name));
		return this;
	}

	setAllNotebooksToInactive() {
		this.notebooks.map(notebook => notebook.setToInactive());
	}

}

export default NotebookList;
