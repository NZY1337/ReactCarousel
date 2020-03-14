import React, { Component } from "react";
import CardItem from "./components/CardItem";
import Dots from "./components/Dots";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    console.log("component ok");
  }

  state = {
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

  
  handleClickDots = (id) => {
        // index of the selected item
        const cardIndex = this.state.cards.findIndex(p => {
            return p.id === id
        });
        
        /* clone new arr */
        let newSlides = [...this.state.cards];

        newSlides[cardIndex].shown = true;
        newSlides.forEach(item => {
            if (item.id !== id) {
                item.shown = false;
            }
        })
         
        // newSlides[cardIndex].shown = newSlides[cardIndex].shown ? false : true;
        

        this.setState({
            cards: newSlides
        })
        
  };    
  
  render() {
    let items = null;
    let renderDots = null;

    items = (
      <div>
        {this.state.cards.map((item, index) => {
          if (item.shown) {
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
                    isDotActive={item.shown}      
                    clickDots={() => this.handleClickDots(item.id)}
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
                </div>
            </div>
        </div>
    );
  }
}

export default App;
