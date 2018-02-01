import React from 'react';
import PropTypes from 'prop-types';
import { Editor, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './NoteEditor.css';

const NoteEditor = ({ note, onNoteEditorChange = (f => f) }) => {

	return (
		<div id="editor" className="panel">
			<div className="title">{note.name}</div>
			<div className="content">
				<Editor
					editorState={note.content}
					handleKeyCommand={(command, editorState) => {
						const newState = RichUtils.handleKeyCommand(editorState, command);
						return onNoteEditorChange(note.id, newState);
					}}
					onChange={(editorState) => onNoteEditorChange(note.id, editorState)} />
			</div>
		</div>
	);

};

NoteEditor.propTypes = {
	note: PropTypes.object,
	onNoteEditorChange: PropTypes.func
};

export default NoteEditor;
