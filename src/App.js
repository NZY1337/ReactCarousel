import React, { Component } from "react";
import Carousel from './components/Carousel/MainCarousel/MainCarousel';
import Categories from './components/MasonryCategories/Categories';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
   
    render() {
        
        return (
            <div className="carousel-wrapper position-relative">
                <Carousel />
                <Categories />
            </div>
        );
    }
}

export default App;
