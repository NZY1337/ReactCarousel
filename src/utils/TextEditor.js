import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = (editorState) => this.setState({ editorState });
	}

	render() {
		return (
			<div className='editor-container'>
				<Editor placeholder='Explore your way in... ' editorState={this.state.editorState} onChange={this.onChange} />;
			</div>
		);
	}
}

export default TextEditor;
