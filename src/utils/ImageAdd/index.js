import React, { Component } from "react";
import styles from "./style.css";

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
				<i>Add Img Url</i>
			</button>
		);
	}
}
