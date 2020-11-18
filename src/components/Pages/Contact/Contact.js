import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './contact.scss';

import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import dcContact from '../../../assets/images/dc-contact.svg';

const Axios = require("axios").default;

function Contact() {
	const [user, setValues] = useState({
		name: "",
		email: "",
		message: "",
	});

	const onSubmitContactForm = (e) => {
		e.preventDefault();

		Axios.post("https://us-central1-designer-s-compass.cloudfunctions.net/contactForm", user)
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
		<div className='container-fluid p-0  dc-contact-background'>
			<div className="container h-100">
				<div className='row justify-content-center align-items-center h-100'>

					<div className='col-lg-9 px-0 dc-contact align-items-stretch d-flex'>
						<Form className='col-lg-7 dc-contact_form w-100' onSubmit={onSubmitContactForm}>

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

							<Button className="mt-3" variant='primary' type='submit'>
								Trimite
								<FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} size='lg' />
							</Button>
						</Form>

						<div className="col-lg-5 dc-contact_welcome d-flex justify-content-center flex-column">
							<img className="img-fluid mx-auto" src={dcContact} alt="" />
							<h3 className="mt-3">Bine Ati Venit!</h3>
							<p className="my-2">Cauti un proiect de design modern? Esti in locul potrivit. Completeaza acest formular simplu si noi te v-om contacta
							in cel mai scurt timp.
							</p>

							<hr style={{ width: '100%', height: '1px' }} />

							<div className="dc-contact_welcome-info">
								<div>
									<FontAwesomeIcon className='mr-2' icon={faPhone} size='sm' />
									<a href="tel:+40 728 255 22">+40 728 255 22</a>
								</div>

								<div className="mt-2">
									<FontAwesomeIcon className='mr-2' icon={faEnvelope} size='sm' />
									<a href="email:office@razvanpuricescu.com">office@razvanpuricescu.com</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
