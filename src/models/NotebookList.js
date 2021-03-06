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
		if (this.notebooks.length) {
			return this.notebooks.find(notebook => notebook.active);
		} else {
			return new Notebook('Untitled');
		}
	}

	addNotebook(name) {
		this.setAllNotebooksToInactive();
		this.notebooks.push(new Notebook(name));
		return this;
	}

	deleteNotebookByID(id) {
		this.notebooks = this.notebooks.filter(notebook => notebook.id !== id);
		return this;
	}

	deleteNotebookByName(name) {
		this.notebooks = this.notebooks.filter(notebook => notebook.name !== name);
		return this;
	}

	setAllNotebooksToInactive() {
		this.notebooks.map(notebook => notebook.setToInactive());
		return this;
	}

	setFirstNotebookToActive() {
		if (this.notebooks.length) {
			this.notebooks[0].setToActive();
		}
		return this;
	}

}

export default NotebookList;
