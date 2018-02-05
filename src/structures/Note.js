import { v4 } from 'uuid';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';

class Note {

	constructor(name = 'Untitled') {
		this.id = v4();
		this.name = name;
		this.content = new EditorState.createEmpty();
		this.active = true;
		this.datetime_updated = new Date();
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

	getContent() {
		return this.content;
	}

	setContent(editorState) {
		this.content = editorState;
		return this;
	}

	setContentWithHTML(html) {
		this.content = new EditorState.createWithContent(this.convertHTMLToEditorState(html));
		return this;
	}

	convertHTMLToEditorState(html) {
		const blocksFromHtml = convertFromHTML(html);
		const content = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);
		return content;
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

	getDateTimeUpdated() {
		return this.datetime_updated;
	}

	setDateTimeUpdated(datetime) {
		this.datetime_updated = datetime;
		return this;
	}

	setDateTimeToNow() {
		this.datetime_updated = new Date();
		return this;
	}

}

export default Note;
