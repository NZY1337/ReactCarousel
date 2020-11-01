import React, { Component } from "react";
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";

import ImageAdd from "./ImageAdd";

import Editor, { composeDecorators } from "draft-js-plugins-editor";
import "draft-js/dist/Draft.css";
import "./text-editor.scss";
import createHighlightPlugin from "./plugins/highlightPlugin";

import BlockStyleToolbar, { getBlockStyle } from "./components/blockstyles/BlockStyleToolbar";

// uploading img & alignment
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";

// plugins
import addLinkPlugin from "./plugins/addLinkPlugin";

const highlightPlugin = createHighlightPlugin();
const alignmentPlugin = createAlignmentPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(resizeablePlugin.decorator, alignmentPlugin.decorator, focusPlugin.decorator);

const imagePlugin = createImagePlugin({ decorator });

class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };

		this.handleKeyCommand = this.handleKeyCommand.bind(this);

		this.plugins = [highlightPlugin, addLinkPlugin, imagePlugin, alignmentPlugin, resizeablePlugin, focusPlugin];
	}

	handleClick = (e) => {
		const imgPath = URL.createObjectURL(e.target.files[0]);
		const newEditorState = this.insertImage(this.state.editorState, imgPath);
		this.onChange(newEditorState);
	};

	insertImage = (editorState, imgPath) => {
		const contentState = editorState.getCurrentContent();
		const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src: imgPath });
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const newEditorState = EditorState.set(editorState, {
			currentContent: contentStateWithEntity,
		});
		return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
	};

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

	focus = () => {
		this.editor.focus();
	};

	onAddImage = (e) => {
		e.preventDefault();
		const editorState = this.state.editorState;
		const urlValue = window.prompt("Paste Image Link");
		const contentState = editorState.getCurrentContent();

		const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src: urlValue });
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

		const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity }, "create-entity");
		this.setState(
			{
				editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " "),
			},
			() => {
				setTimeout(() => this.focus(), 0);
			},
		);
	};

	// onURLChange = (e) => this.setState({ urlValue: e.target.value });

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

				<ImageAdd editorState={this.state.editorState} onChange={this.onChange} modifier={imagePlugin.addImage} />

				<button>
					<input onChange={this.handleClick} type='file' />
				</button>

				<div onClick={this.focus} className='mt-3 editors'>
					<Editor
						ref={(element) => {
							this.editor = element;
						}}
						blockStyleFn={getBlockStyle}
						plugins={this.plugins}
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
					/>
					<AlignmentTool />
				</div>
			</div>
		);
	}
}
export default TextEditor;
