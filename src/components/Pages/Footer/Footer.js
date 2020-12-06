import React, { Component } from 'react';
import './footer.scss';
import logo from '../../../assets/images/beadesignful-logo.png';

export default function Footer() {
    const footerNav = {
        footer: [
            {
                name: 'Our World',
                description: 'Welcome to a place where visuals matter. On BeauDesignful, smart voices and original ideas take center stage - with no ads in sight. Watch',
                bonus: ''
            },

            {
                name: 'Create Your Future Today',
                description: 'Find all topics you care interested in, and we will deliver the best ideas for your apetite. Explore, Discover, Enjoy.',
                bonus: ''
            },

            {
                name: 'Explore Our Projects',
                description: 'Thank you for being a member of WebDesignfull. You might get unlimited access to insightful stories from amazing designers.',
                bonus: 'Browse More...'
            }
        ],
    };

    const footerMenu = [
        {
            name: 'Home',
            link: ''
        },

        {
            name: 'About',
            link: ''
        },

        {
            name: 'Legal',
            link: ''
        }
    ]

    return (
        <div>
            <footer className="py-5">
                <div className="container">
                    <div className="row">
                        {footerNav.footer.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 text-white">
                                    <h5>{item.name}</h5>
                                    <p>
                                        {item.description}


                                        {/* different ternary operator, different cases */}
                                        {/* {
                                            !item.bonus ? <a href="" className="ml-2 text-danger">{item.bonus}</a> : <h2>none</h2>
                                        }  */}

                                        {
                                            item.bonus && <a href="#" className="ml-2 text-danger">{item.bonus}</a>
                                        }
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <hr className="w-100" style={{ height: '1px', backgroundColor: 'white' }} />

                    <div className="row align-items-center">
                        <div className="col-sm-8">
                            <img src={logo} style={{ width: '60px', height: '60px' }} alt="" />
                            <h2 className="d-inline-block align-middle ml-4">BeauDesignful</h2>
                        </div>

                        <div className="col-sm-4">
                            <ul class="d-xl-flex" id="footer-nav">
                                {footerMenu.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#">{item.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}