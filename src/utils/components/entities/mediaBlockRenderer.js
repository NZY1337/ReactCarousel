import React, { Component } from "react";

export const mediaBlockRenderer = (block) => {
	if (block.getType() === "atomic") {
		return {
			component: Media,
			editable: false,
		};
	}

	return null;
};

const Image = (props) => {
	if (!!props.src) {
		return <img className='img-fluid w-50' src={props.src} />;
	}
	return null;
};

class Media extends React.Component {
	render() {
		const { block, contentState } = this.props;

		const data = contentState.getEntity(block.getEntityAt(0)).getData();

		return <Image src={data.src} />;
	}
}
