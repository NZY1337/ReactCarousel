import React, { Component } from "react";
import Carousel from "../Carousel/MainCarousel/MainCarousel";
import Categories from "../Pages/Categories/Categories";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { detectUserPage } from "../../redux/actions/userAction";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.detectUserPage(this.props.location.pathname);
	}

	render() {
		return (
			<div>
				<Carousel />
				<Categories />
			</div>
		);
	}
}

export default withRouter(connect(null, { detectUserPage })(Home));
