import React, { Component } from 'react';
import Carousel from '../Carousel/MainCarousel/MainCarousel';
import Categories from '../MasonryCategories/Categories';
import Footer from '../Footer/Footer';

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