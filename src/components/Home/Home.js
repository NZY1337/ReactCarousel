import React, { Component } from 'react';
import Carousel from '../Carousel/MainCarousel/MainCarousel';
import Categories from '../Pages/Categories/Categories';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    render() {
        console.log(this.props.location)
        return (
            <div>
                < Carousel />
                < Categories />
            </div>
        )
    }
}

export default Home;