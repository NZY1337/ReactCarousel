import React , { Component } from 'react';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import InteriorDesign from '../Pages/InteriorDesign/InteriorDesign';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Home from '../Home/Home'
import RenderLinks from './RenderLinks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Navigation() {
    return (
        <Router >
            <div>
                <RenderLinks />

                <Switch >
                    <Route path="/" exact component={Home}/>
                    <Route path="/Portfolio" exact component={Portfolio}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/interior-design" exact component={InteriorDesign}/>
                    <Route path="/contact" exact component={Contact}/>

                </Switch>
            </div>
        </Router>
    )
}


export default Navigation;