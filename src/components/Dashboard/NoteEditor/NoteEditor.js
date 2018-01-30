import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor, EditorState, RichUtils, ContentState, convertFromHTML } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './NoteEditor.css';

class NoteEditor extends Component {

	constructor(props) {

		super(props);

		this.state = {
			editorState: EditorState.createWithContent(this.convertHTMLToEditorState(this.props.note.content))
		}

		this.onChange = (editorState) => this.setState({editorState});
		this.handleKeyCommand = this.handleKeyCommand.bind(this);

	}

	static propTypes = {
		note: PropTypes.object
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			editorState: EditorState.createWithContent(this.convertHTMLToEditorState(nextProps.note.content))
		})
	}

	convertHTMLToEditorState(html) {
		const blocksFromHtml = convertFromHTML(html);
		const content = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);
		return content;
	}

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
