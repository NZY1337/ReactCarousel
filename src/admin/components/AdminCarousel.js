import React, { Component } from "react";
import styled from "styled-components";

const bg = "https://images.unsplash.com/photo-1586489398179-e374c1437a73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const Container = styled.div`
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100vh;
	position: relative;
	color: #fff;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
`;

class AdminCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Container className='container-fluid'>
				<div className='row h-100 align-items-center'>
					<div className='col-lg-12 h-100 d-flex flex-column align-items-center justify-content-center'>
						<h1>This is the Contact Page</h1>
					</div>
				</div>
			</Container>
		);
	}
}

export default AdminCarousel;
