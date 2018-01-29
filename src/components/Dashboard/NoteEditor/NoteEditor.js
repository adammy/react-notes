import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState, RichUtils, ContentState, convertFromHTML } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './NoteEditor.css';

class NoteEditor extends Component {

	constructor(props) {

		super(props);

		const html = this.props.note.content;
		const blocksFromHtml = convertFromHTML(html);
		const content = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);

		this.state = {
			editorState: EditorState.createWithContent(content)
		}

		this.onChange = (editorState) => this.setState({editorState});
		this.handleKeyCommand = this.handleKeyCommand.bind(this);

	}

	static propTypes = {
		note: PropTypes.object
	};

	handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return 'handled';
		}
		return 'not handled';
	}

	render() {

		const { note } = this.props;

		return (
			<div id="editor" className="panel">
				<div className="title">{note.name}</div>
				<div className="content">
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange} />
				</div>
			</div>
		);

	}

}

export default NoteEditor;
