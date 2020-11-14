import React, { Component } from "react";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import InteriorDesign from "../Pages/InteriorDesign/InteriorDesign";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/beadesignful-logo.png";
import { Link } from "react-router-dom";
import "../../../src/assets/scss/animations/burger-menu.scss";
import { getUser } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import "./menu.scss";
import RenderLinks from "./RenderLinks";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleCateg: false,

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
					],
				},
			],
		};

		this.handleToggleCategories = this.handleToggleCategories.bind(this);
	}

	componentDidMount() {
		this.props.getUser();
	}

	handleToggleCategories() {
		const toggleMenuCategory = this.state.toggleCateg;

		this.setState({
			toggleCateg: !toggleMenuCategory,
		});
	}

	render() {
		const classNameCat = this.state.toggleCateg ? "v-shown" : "v-hidden";
		let showAdmin = this.props.user !== null ? "d-block" : "d-none";

		return (
			<div className='container-fluid menu'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
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
						</div>

						<div className='col-lg-12'>
							<div className={`text-white text-right ${classNameCat}`}>
								<h6 className='a-c1'>House span</h6>
								<h6 className='a-c2'>Club / Bar</h6>
								<h6 className='a-c3'>World</h6>
								<h6 className='a-c4'>Business Office</h6>
								<h6 className='a-c5'>Hotel / Resport</h6>
								<h6 className='a-c6'>Shopping Mall</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps, { getUser })(Header);
