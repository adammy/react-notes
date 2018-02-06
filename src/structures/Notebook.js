import { v4 } from 'uuid';
import Note from './Note';

class Notebook {

	constructor(name = 'Untitled') {
		this.id = v4();
		this.name = name;
		this.notes = [];
		this.active = true;
	}

	getID() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	getNotes(sortBy = 'datetime_updated') {
		switch (sortBy) {
			case 'name':
				return this.notes.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 1);
			case 'datetime_updated':
				return this.notes.sort((a, b) => {
					if (a.datetime_updated < b.datetime_updated) {
						return 1;
					} else {
						return -1;
					}
				});
			default:
				break;
		}
		return this.notes;
	}

	getNoteByID(id) {
		return this.notes.find(note => note.id === id);
	}

	getNoteByName(name) {
		return this.notes.find(note => note.name === name);
	}

	deleteNoteByID(id) {
		this.notes = this.notes.filter(note => note.id !== id);
		return this;
	}

	deleteNoteByName(name) {
		this.notes = this.notes.filter(note => note.name !== name);
		return this;
	}

	getActiveNote() {
		return this.notes.find(note => note.active);
	}

	addNote(name) {
		this.setAllNotesToInactive();
		this.notes.push(new Note(name));
		return this;
	}

	setAllNotesToInactive() {
		this.notes.map(note => note.setToInactive());
		return this;
	}

	setFirstNoteToActive() {
		if (this.notes.length) {
			this.notes[0].setToActive();
		}
		return this;
	}

	getActive() {
		return this.active;
	}

	setToActive() {
		this.active = true;
		return this;
	}

	setToInactive() {
		this.active = false;
		return this;
	}

}

export default Notebook;
