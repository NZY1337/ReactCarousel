import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../../src/assets/scss/animations/burger-menu.scss";
import { getUser } from "../../redux/actions/userAction";

import { connect } from "react-redux";
import "./menu.scss";
import RenderLinks from "./RenderLinks";
import Navigation from './Navigation';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleCateg: false,
			// the state is getting retrieved from LS
			menuPos: localStorage.getItem("menu-position") || "position-absolute",

			links: [
				{
					name: "Home",
					path: "/",
					id: "home",
					hasSubMenu: false,
				},

				{
					name: "Interior Design",
					path: "/interior-design",
					id: "interior-design",
					hasSubMenu: false,
				},

				{
					name: "Portofolio",
					path: "/portfolio",
					id: "portfolio",
					hasSubMenu: false,
				},

				{
					name: "Blog",
					path: "/blog",
					id: "blog",
					hasSubMenu: false,
				},

				{
					name: "About",
					path: "/about",
					id: "about",
					hasSubMenu: false,
				},

				{
					name: "Contact",
					path: "/contact",
					hasSubMenu: false,
				},

				{
					name: "Admin",
					path: "#",
					id: "admin",
					hasSubMenu: true,
					submenu: [
						{
							name: "Admin Carousel",
							path: "/admin-carousel",
						},
						{
							name: "Admin Blog",
							path: "/admin-blog",
						},
					],
				},
			],
		};
	}

	componentDidMount() {
		this.props.getUser();
	}

	handleToggleCategories = () => {
		const toggleMenuCategory = this.state.toggleCateg;

		this.setState({
			toggleCateg: !toggleMenuCategory,
		});
	};

	render() {
		const classNameCat = this.state.toggleCateg ? "v-shown" : "v-hidden";
		let showAdmin = this.props.user !== null ? "d-block" : "d-none";

		return (

			<Navigation >
				<Navbar collapseOnSelect className='px-0' expand='lg' variant='dark'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />

					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
							{this.state.links.map((item, index) => {
								return (
									<>
										<RenderLinks
											index={index}
											sublinks={item.submenu}
											path={item.path}
											name={item.name.toUpperCase()}
											showAdmin={showAdmin}
											subParentName={item.name.toUpperCase()}
											hasSubMenu={item.hasSubMenu}
										/>
									</>
								);
							})}
						</Nav>

						<Nav>
							<Nav.Link className='px-0' eventKey={2} href='#memes'>
								<wrapper onClick={this.handleToggleCategories}>
									<input type='checkbox' />
									<bun>
										<burger></burger>
									</bun>
								</wrapper>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div className={`text-white text-right ${classNameCat}`}>
					<h6 className='a-c1'>House span</h6>
					<h6 className='a-c2'>Club / Bar</h6>
					<h6 className='a-c3'>World</h6>
					<h6 className='a-c4'>Business Office</h6>
					<h6 className='a-c5'>Hotel / Resport</h6>
					<h6 className='a-c6'>Shopping Mall</h6>
				</div>
			</Navigation>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		// get the props from state (reasign)
		user: state.user,
		path: state.url
	};
}

export default connect(mapStateToProps, { getUser })(Header);
