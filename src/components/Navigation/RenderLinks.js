import React , { Component } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/beadesignful-logo.png';
import { Link } from 'react-router-dom';

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
        const asd = this.state.toggleCateg;

        this.setState({
            toggleCateg: !asd
        })
    }
    
    render () {
        console.log(this.props)
        if (this.state.toggleCateg) {
            console.log('lol')
        } else {
            console.log('not')
        }
        
        return (
            <div className="container-fluid bg-dark text-white">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Navbar collapseOnSelect expand="lg"  variant="dark">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    {
                                        this.state.links.map((item, index) => {
                                            return (
                                                <h5 key={index} className="mb-0 mr-5">
                                                    <Link  to={item.path}> {item.name.toUpperCase()}</Link>
                                                </h5>
                                            )
                                        })
                                    }
                                    
                                </Nav>

                                <Nav>
                                    <Nav.Link href="#deets">More deets</Nav.Link>
                                    <Nav.Link eventKey={2} onClick={this.handleToggleCategories} href="#memes">
                                        x
                                    </Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default RenderLinks;