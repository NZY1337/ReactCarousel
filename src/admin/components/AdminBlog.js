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

	render() {
		return (
			<Container className='container-fluid'>
				<div className='container h-100'>
					<div className='row h-100 justify-content-center'>
						<div className='col-lg-6 h-100 d-flex flex-column  justify-content-center'>
							<Form className='w-100'>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Blog Title</Form.Label>
									<Form.Control type='text' placeholder='blog title' />
									<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
								</Form.Group>

								<Form.Group controlId='formBasicPassword'>
									<Form.Label>Blog Content</Form.Label>
									<Form.Control type='text' placeholder='Password' />
								</Form.Group>

								<Form.Group>
									<Form.Label>Blog Content</Form.Label>
									<DatePicker className='form-control' selected={this.state.date} onChange={(date) => this.setStartDate(date)} />
								</Form.Group>

								<Button variant='danger' type='submit'>
									Submit
								</Button>
							</Form>

							<TextEditor />
						</div>
					</div>
				</div>
			</Container>
		);
	}
}

export default AdminBlog;
