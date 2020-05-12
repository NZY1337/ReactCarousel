import React, { Component } from 'react';
import Carousel from '../Carousel/MainCarousel/MainCarousel';
import Categories from '../Pages/Categories/Categories';
import Footer from '../Pages/Footer/Footer';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                < Carousel />
                < Categories />
                < Footer />
            </div>
        )
    }
}

export default Home;