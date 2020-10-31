import React, { Component } from "react";
import { EditorState, RichUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";
import "draft-js/dist/Draft.css";
import "./text-editor.scss";
import createHighlightPlugin from "./plugins/highlightPlugin";

const highlightPlugin = createHighlightPlugin();

class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };

		this.handleKeyCommand = this.handleKeyCommand.bind(this);

		this.plugins = [highlightPlugin];
	}

	onChange = (editorState) => this.setState({ editorState });

	onStrikeThroughClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH"));
	};

	_onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onUnderlineClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
	};

	onItalicClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
	};

	onHighlight = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT"));
	};

	handleKeyCommand(command, editorState) {
		const newState = RichUtils.handleKeyCommand(editorState, command);

		if (newState) {
			this.onChange(newState);
			return "handled";
		}

		return "not-handled";
	}

	render() {
		return (
			<div>
				<button className='strikethrough' onClick={this.onStrikeThroughClick}>
					abc
				</button>

				<button className='highlight' onClick={this.onHighlight}>
					<span style={{ background: "yellow" }}>H</span>
				</button>

				<button onClick={this.onUnderlineClick}>U</button>

				<button onClick={this._onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>

				<div className='mt-3'>
					<Editor
						plugins={this.plugins}
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}
export default TextEditor;
