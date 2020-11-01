import React, { Component } from "react";
import styles from "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default class ImageAdd extends Component {
	// Start the popover closed
	state = {
		url: "",
		open: false,
	};

	addImage = () => {
		const { editorState, onChange } = this.props;
		const link = window.prompt("Insert IMG URL...");

		if (link !== null) {
			this.state.url = link;
		}
		onChange(this.props.modifier(editorState, this.state.url));
	};

	render() {
		return (
			<button className={styles.addImageConfirmButton} type='button' onClick={this.addImage}>
				<i>Add</i>
				<FontAwesomeIcon className='mx-2' icon={faImage} size='lg' />
				<i>URL</i>
			</button>
		);
	}
}
