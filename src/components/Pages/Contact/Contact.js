import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Axios = require("axios").default;

function Contact() {
	const [user, setValues] = useState({
		name: "",
		email: "",
		message: "",
	});

	const onSubmitContactForm = (e) => {
		e.preventDefault();

		Axios.post("https://us-central1-designer-s-compass.cloudfunctions.net/sendMail", user)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onChangeHandler = (e) => {
		setValues({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-lg-12 mt-5'>
					<Form className='mt-5' onSubmit={onSubmitContactForm}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								onChange={onChangeHandler}
								type='text'
								name='name'
								value={user.name}
								placeholder='Enter email'
							/>
						</Form.Group>

						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email </Form.Label>
							<Form.Control
								onChange={onChangeHandler}
								name='email'
								value={user.email}
								type='email'
								placeholder='Enter email'
							/>
						</Form.Group>

						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Message</Form.Label>
							<Form.Control
								onChange={onChangeHandler}
								name='message'
								value={user.message}
								as='textarea'
								rows={3}
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
