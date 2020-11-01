import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../admin.scss";
import TextEditor from "../../utils/TextEditor";

import "react-datepicker/dist/react-datepicker.css";

const bg = "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";

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

class AdminBlog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			date: new Date(),
		};
	}

	setStartDate = (date) => {
		this.setState({
			date,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className='container-fluid my-5'>
				<div className='container h-100'>
					<div className='row h-100 justify-content-center'>
						<div className='col-lg-10 h-100 d-flex flex-column  justify-content-center'>
							<Form className='w-100' onSubmit={this.onSubmit}>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Blog Title</Form.Label>
									<Form.Control type='text' placeholder='blog title' />
								</Form.Group>

								<Form.Group>
									<Form.Label>Select Date</Form.Label>
									<DatePicker className='form-control' selected={this.state.date} onChange={(date) => this.setStartDate(date)} />
								</Form.Group>

								<TextEditor />

								<Button className='mt-3' variant='danger' type='submit'>
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminBlog;
