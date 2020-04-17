import React , { Component } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/beadesignful-logo.png';
import { Link } from 'react-router-dom';

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
                }

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
                                                    <Link key={index} className="mb-0 mr-5" to={item.path}> {item.name.toUpperCase()}</Link>
                                                )
                                            })
                                        }
                                    </Nav>

                                    <Nav>
                                        <Nav.Link className="px-0" eventKey={2} onClick={this.handleToggleCategories} href="#memes">
                                            x
                                        </Nav.Link>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                        </div>

                        <div className="col-lg-12">
                            <div className={`text-white text-right ${classNameCat}`}>
                                <h6>House</h6>
                                <h6>Club / Bar</h6>
                                <h6>World</h6>
                                <h6>Business Office</h6>
                                <h6>Hotel / Resport</h6>
                                <h6>Shopping Mall</h6>
                            </div>
                        </div>

                    </div>
                </div>
              
            </div>
        )
    }
}


export default RenderLinks;