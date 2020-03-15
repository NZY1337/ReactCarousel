import React, { Component } from "react";
import CardItem from "./components/CardItem";
import Dots from "./components/Dots";
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrows from './components/Arrows';


class App extends Component {
    constructor(props) {
        super(props);
        console.log("component ok");
    }

    state = {
        slideIndex: 0,
        
        cards: [
            {
                id: 0,
                url:
                "https://images.pexels.com/photos/3709388/pexels-photo-3709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                name: "Winter Is Comming",
                shown: true
            },
            
            {
                id: 1,
                url:
                "https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                name: "In July",
                shown: false
            },

            {
                id: 2,
                url:
                "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                name: "A Day To Remember",
                shown: false
            },

            {
                id: 3,
                url:
                "https://images.pexels.com/photos/1820144/pexels-photo-1820144.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                name: "Look At Me Now",
                shown: false
            }
        ]
    };
   

    componentDidMount() {
        
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
        
        items = (
            <div>
                {this.state.cards.map((item, index) => {
                    // return only the item that has its index === slideIndex
                    if (index === this.state.slideIndex ) {
                        return (
                            <CardItem 
                                source={item.url}  
                                name={item.name} 
                                key={item.id} 
                            />
                        );
                    }
                })}
            </div>
        );

        renderDots = (
            <div>
                {this.state.cards.map((item, index) => {

                    return (
                        <Dots 
                            isDotActive={index === this.state.slideIndex ? true : false}      
                            clickDots={() => this.handleClickDots(index)}
                            key={item.id}
                        />
                    );
                })}
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        {items}
                        {renderDots}

                        <Arrows 
                            moveSliderRight={() => this.handleClickRightArrow()}
                            moveSliderLeft={() => this.handleClickLeftArrow()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
