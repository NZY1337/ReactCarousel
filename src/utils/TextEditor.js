import React, { Component } from "react";
import { EditorState, RichUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";
import "draft-js/dist/Draft.css";
import "./text-editor.scss";
import createHighlightPlugin from "./plugins/highlightPlugin";
import addLinkPlugin from "./plugins/addLinkPlugin";
import BlockStyleToolbar, { getBlockStyle } from "./components/blockstyles/BlockStyleToolbar";

const highlightPlugin = createHighlightPlugin();

class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };

		this.handleKeyCommand = this.handleKeyCommand.bind(this);

		this.plugins = [highlightPlugin, addLinkPlugin];
	}

	onChange = (editorState) => this.setState({ editorState });

	toggleBlockType = (blockType) => {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
	};

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

	onAddLink = () => {
		const editorState = this.state.editorState;
		const selection = editorState.getSelection();
		const link = window.prompt("Paste the link -");
		if (!link) {
			this.onChange(RichUtils.toggleLink(editorState, selection, null));
			return "handled";
		}
		const content = editorState.getCurrentContent();
		const contentWithEntity = content.createEntity("LINK", "MUTABLE", { url: link });
		const newEditorState = EditorState.push(editorState, contentWithEntity, "create-entity");
		const entityKey = contentWithEntity.getLastCreatedEntityKey();
		this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
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
			<div className='editor'>
				<BlockStyleToolbar editorState={this.state.editorState} onToggle={this.toggleBlockType} />

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

				<button id='link_url' onClick={this.onAddLink} className='add-link'>
					<i className='material-icons'>Insert URL</i>
				</button>

				<div className='mt-3'>
					<Editor
						blockStyleFn={getBlockStyle}
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
