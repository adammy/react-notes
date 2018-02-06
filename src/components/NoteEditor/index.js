import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import './style.css';

class NoteEditor extends Component {

	constructor(props) {
		super(props);
		this.onChange = editorState => this.props.onNoteEditorChange(this.props.note.getID(), editorState);
	}

	static propTypes = {
		note: PropTypes.object,
		onNoteEditorChange: PropTypes.func
	};

	handleKeyCommand(command, editorState) {
		return this.onChange(RichUtils.handleKeyCommand(editorState, command));
	}

	_onBoldClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.props.note.getContent(), 'BOLD'));
	}

	render() {

		return (
			<div id="editor" className="panel">
				{this.props.note &&
					<div>
						<div className="title">{this.props.note.name}</div>
						<div className="content">
							<button onClick={this._onBoldClick.bind(this)}>Bold</button>
							<Editor
								editorState={this.props.note.getContent()}
								handleKeyCommand={this.handleKeyCommand}
								onChange={this.onChange} />
						</div>
					</div>
				}
			</div>
		);

	}

}

export default NoteEditor;
