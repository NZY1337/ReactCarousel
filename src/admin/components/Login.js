import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { googleLogin } from "../../redux/actions/userAction";
import { getUser, logOut } from "../../redux/actions/userAction";

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

const bg = "https://images.pexels.com/photos/5422695/pexels-photo-5422695.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
let sectionStyle = {
	width: "100%",
	height: "100vh",
	backgroundImage: `url(${bg})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};

class Login extends Component {
	componentDidMount() {
		this.props.getUser();
	}

	render() {
		return (
			<div className='container-fluid' style={sectionStyle}>
				<div className='row h-100 align-items-center'>
					<div className='col-lg-12 h-100 d-flex flex-column align-items-center justify-content-center'>
						{this.props.user === null ? (
							<Button onClick={this.props.googleLogin}>Login With Google</Button>
						) : (
							<>
								<h1 className='mb-5 text-white' style={{ fontSize: "70px" }}>
									Hello, {this.props.user.displayName}
								</h1>
								<Button onClick={() => this.props.logOut()}>Log Out</Button>
							</>
						)}
					</div>
				</div>
			</div>
		);
	}
}

// get the values from combined reducers (reducers/index)
function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, { googleLogin, getUser, logOut })(Login);
