import React, { Component } from "react";
import './MainCarousel.scss';
import CardItem from "../CardItems/CardItem";
import Dots from "../CarouselDots/Dots";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Arrows from '../CarouselArrows/Arrows';
// import FirstLetter from "../CarouselDots/DisplayFirstLetter";


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
            },

            {
                id: 4,
                url:
                "https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "Look At Me Now",
                shown: false,
                category: 'abstract'
            },

            {
                id: 5,
                url:
                "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "A Day To Remember",
                shown: false,
                category: 'minimalistic'
            },

            {
                id: 6,
                url:
                "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "In July",
                shown: false,
                category: 'outdoor'
            },

            {
                id: 7,
                url:
                "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "A Day To Remember",
                shown: false,
                category: 'minimalistic'
            },
        ]
    };
   
    
    
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
    
    handleClickLeftArrow (itemLen) {
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
    
    componentDidMount() {
        this.setSpacer();
    }

    componentDidUpdate() {
        this.setSpacer();
    }

    setSpacer() {
        const spacer = document.querySelector('#spacer');
        let dotsWrapperWidth;

        if (this.state.slideIndex >= Math.round(this.state.cards.length / 2)) {
            dotsWrapperWidth = ((this.state.cards.length-(this.state.cards.length - this.state.slideIndex - 1)) * 12) + (20 * (this.state.cards.length - (this.state.cards.length-this.state.slideIndex - 1))) -20;
            spacer.classList.add('spacer-style2');
            spacer.classList.remove('spacer-style1');

        } else {
            // gap = 20; box width = 12;
            // [(cards.length - current index) * 12] + [(cards.length - current index)] - 1 gap(20) -> last box doesn't have a gap;
            // (boxes width + (boxes gap - 1);
            
            dotsWrapperWidth = ((this.state.cards.length-this.state.slideIndex) * 12) + (20 * (this.state.cards.length - this.state.slideIndex) -20);
            spacer.classList.add('spacer-style1');
            spacer.classList.remove('spacer-style2');
        }
        
        spacer.style.width =  `${dotsWrapperWidth - 6}px`;
    }   

    render() {
        let items = null;
        let renderDots = null;
        let backgroundImg = null;
        let categItem = '';
        
        items = (
            <div className="w-75">
                {this.state.cards.map((item, index) => {

                    // return only the item that has the index === slideIndex
                    if (index === this.state.slideIndex ) {
                        backgroundImg = item.url;
                        categItem = item.category;
                        return (
                            <div>
                                <CardItem 
                                    name={item.name} 
                                    key={index + 'b'} 
                                    category={item.category}
                                    cardId={item.id}
                                />
                            </div>
                        );
                    }
                })}

                {/* <Arrows 
                    moveSliderRight={() => this.handleClickRightArrow()}
                    moveSliderLeft={() => this.handleClickLeftArrow()}
                /> */}
            </div>
        );

        const bgImg = {
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        
        renderDots = (
            <div className="dots-holder">
                <h3 class="text-center mb-0">{categItem}</h3>
                    <div id="asd" class="mx-auto">
                        <div class="my-0" id="spacer"></div>
                        <div class="d-flex justify-content-center dots-wrapper asd">
                            {this.state.cards.map((item, index) => {
                                return (
                                    <Dots 
                                        isDotActive={index === this.state.slideIndex ? true : false}      
                                        clickDots={() => this.handleClickDots(index)}
                                        key={index + 'a'}
                                        letter
                                    />
                                );
                            })}
                        </div>
                    </div>
            </div>
        );

        return (
            <div className="carousel-wrapper position-relative">
                <div className="container-fluid h-100 React-Carousel" style={bgImg}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">

                            <div className="col-lg-12" style={{justifyContent: 'space-evenly'}}>
                                {items}
                            </div>

                            <div>
                                {renderDots}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
