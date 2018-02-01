import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './NoteEditor.css';

class NoteEditor extends Component {

	static propTypes = {
		note: PropTypes.object,
		onNoteEditorChange: PropTypes.func
	};

	handleKeyCommand(command, editorState) {
		return this.onChange(RichUtils.handleKeyCommand(editorState, command));
	}

	render() {

		const { note, onNoteEditorChange } = this.props;

		return (
			<div id="editor" className="panel">
				<div className="title">{note.name}</div>
				<div className="content">
					<Editor
						editorState={note.content}
						handleKeyCommand={this.handleKeyCommand}
						onChange={(editorState) => onNoteEditorChange(note.id, editorState)} />
				</div>
			</div>
		);

	}

}

export default NoteEditor;
