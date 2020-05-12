import React, { Component } from "react";
import './MainCarousel.scss';
import CardItem from "../CardItems/CardItem";
import Dots from "../CarouselDots/Dots";
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrows from '../CarouselArrows/Arrows';
import FirstLetter from "../CarouselDots/DisplayFirstLetter";


class Carousel extends Component {
    constructor(props) {
        super(props);
        console.log("component ok");
    }
    
    state = {
        slideIndex: 0,
        bgImg: null,
        cards: [
            {
                id: 0,
                url:"https://images.pexels.com/photos/312029/pexels-photo-312029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "Winter Is Comming",
                shown: true,
                category: 'interior'
            },
            
            {
                id: 1,
                url:
                "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "In July",
                shown: false,
                category: 'outdoor'
            },

            {
                id: 2,
                url:
                "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "A Day To Remember",
                shown: false,
                category: 'minimalistic'
            },

            {
                id: 3,
                url:
                "https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "Look At Me Now",
                shown: false,
                category: 'abstract'
            }
        ]
    };
   
    componentDidMount() {
       
    }

    getFirstLetter(item) {
        return item.name.split('').splice(0,1)
    }


    handleClickRightArrow () {
        this.setState({
            slideIndex : this.state.slideIndex += 1
        })
            
        if (this.state.slideIndex > 3) {
            this.setState({
                slideIndex : 0
            })
        }
    }
    
    handleClickLeftArrow () {
        const itemsLength = this.state.cards.length;

        this.setState({
            slideIndex : this.state.slideIndex -= 1
        })
        
        if (this.state.slideIndex < 0) {
            this.setState({
                slideIndex : itemsLength - 1
            })
        }
    }
    
    handleClickDots = (index) => {
        this.setState({
            slideIndex: index
        })
    };    
    
    render() {
        let items = null;
        let renderDots = null;
        let backgroundImg = null;
        
        items = (
            <div className="w-75">
                {this.state.cards.map((item, index) => {

                    // return only the item that has the index === slideIndex
                    if (index === this.state.slideIndex ) {
                        backgroundImg = item.url;
                        
                        return (
                            <div>
                                <CardItem 
                                    name={item.name} 
                                    key={item.id} 
                                    category={item.category}
                                    cardId={item.id}
                                />
                            </div>
                        );
                    }
                })}

                <Arrows 
                    moveSliderRight={() => this.handleClickRightArrow()}
                    moveSliderLeft={() => this.handleClickLeftArrow()}
                />
            </div>
        );

        const bgImg = {
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        
        renderDots = (
            <div className="dots-wrapper">
                {this.state.cards.map((item, index) => {
                    return (
                        <Dots 
                            isDotActive={index === this.state.slideIndex ? true : false}      
                            clickDots={() => this.handleClickDots(index)}
                            key={item.id}
                            letter
                        />
                    );
                })}
            </div>
        );
                
        return (
            <div className="carousel-wrapper position-relative">
                <div className="container-fluid h-100 React-Carousel" style={bgImg}>
                    <div className="container h-100">
                    <div className="row h-100 align-items-around">

                        <div className="col-lg-12 d-flex flex-column" style={{justifyContent: 'space-evenly'}}>

                            {/* outputing all the items informations */}
                            {items}
                            
                            <div className="dots-holder">

                                {this.state.cards.map((item, index) => {
                                    
                                    if (index === this.state.slideIndex ) { 
                                        return (
                                            <h3 id="firstTitleLetter">{this.getFirstLetter(item)}</h3>
                                        )
                                    }
                                })}
                                
                                <span id="line1"></span>
                                {renderDots}
                                <span id="line2"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
