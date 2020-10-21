import React , { Component } from 'react';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import InteriorDesign from '../Pages/InteriorDesign/InteriorDesign';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/beadesignful-logo.png';
import { Link } from 'react-router-dom';
import '../../../src/assets/scss/animations/burger-menu.scss';

import './menu.scss'

class RenderLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleCateg: false,
            
            links: [
                {
                    name: 'Home',
                    path: '/'
                },
                
                {
                    name: 'Interior Design',
                    path: '/interior-design',
                },

                {
                    name: 'Portofolio',
                    path: '/portfolio',
                },
                    
                {
                    name: 'Blog',
                    path: '/blog',
                },

                {
                    name: 'About',
                    path: '/about',
                },

                {
                    name: 'Contact',
                    path: '/contact',
                },
                
                {
                    name: 'Admin',
                    path: '#',
                    submenu: {
                        carousel: {
                            name:'Carousel',
                            path: '/carousel'
                        }
                    }
                },

            ]
        }
        
        this.handleToggleCategories = this.handleToggleCategories.bind(this);
    }

    handleToggleCategories(){
        const toggleMenuCategory = this.state.toggleCateg;

        this.setState({
            toggleCateg: !toggleMenuCategory
        })
    }

    render () {
        const classNameCat = this.state.toggleCateg ? 'v-shown' : 'v-hidden';


        return (
            <div className="container-fluid menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Navbar collapseOnSelect className="px-0" expand="lg"  variant="dark">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        {
                                            this.state.links.map((item, index) => {
                                                return (
                                                    <>
                                                    {
                                                        item.name == 'Admin' ? (
                                                            <NavDropdown title="ADMIN" className="mr-5 font-weight-bold" id="nav-dropdown">
                                                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                                                <NavDropdown.Divider />
                                                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                                                            </NavDropdown>
                                                        ) : (
                                                            <Link key={index} className="mb-0 mr-5 font-weight-bold nav-link" to={item.path}>
                                                                {item.name.toUpperCase()}
                                                            </Link>
                                                        )
                                                    }
                                                    </>
                                                )
                                            })
                                        }
                                    </Nav>

                                    <Nav>
                                        <Nav.Link className="px-0" eventKey={2}  href="#memes">
                                            <wrapper onClick={this.handleToggleCategories}>
                                                <input type="checkbox" />
                                                <bun>
                                                    <burger></burger>
                                                </bun>
                                            </wrapper>
                                        </Nav.Link>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                        </div>

                        <div className="col-lg-12">
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
        )
    }
}


export default RenderLinks;