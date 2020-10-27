import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 4px solid white;
	color: white;
	background-color: transparent;
	padding: 10px 15px;
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 5px;
	text-transform: uppercase;

	&:hover {
		background-color: white;
		color: black;
	}

	&:active {
		transform: translateY(3px);
	}

	&:focus {
		outline: none;
	}
`;

function Login() {
	const bg = "https://images.pexels.com/photos/5422695/pexels-photo-5422695.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
	let sectionStyle = {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${bg})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className='container-fluid' style={sectionStyle}>
			<div className='row h-100 align-items-center'>
				<div className='col-lg-12 h-100 d-flex align-items-center justify-content-center'>
					{/* <Button style={btnRzv}>Login With Google</Button> */}
					<Button>Login With Google</Button>
				</div>
			</div>
		</div>
	);
}

export default Login;
