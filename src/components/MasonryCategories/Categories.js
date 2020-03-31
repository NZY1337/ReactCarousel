import React, {Component} from 'react';
import './Categories.css';
import Masonry from 'react-masonry-css'

class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items : [
                {id: 1, name: 'My First Item', img: 'https://images.pexels.com/photos/2645245/pexels-photo-2645245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 2, name: 'Another item', img: 'https://images.pexels.com/photos/4005801/pexels-photo-4005801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 3, name: 'Third Item', img: 'https://images.pexels.com/photos/3218135/pexels-photo-3218135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 4, name: 'Here is the Fourth', img: 'https://images.pexels.com/photos/3586911/pexels-photo-3586911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 5, name: 'High Five', img: 'https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 5, name: 'Test Smoke', img: 'https://images.pexels.com/photos/3979732/pexels-photo-3979732.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}
            ]
        }
    }

    render() {
        const breakpointColumnsObj = {
            default: 3,
            1100: 3,
            700: 2,
            500: 1
        };

        const items = this.state.items.map(item => {
            console.log(item.img);
            return (
                <div key={item.id}>
                    <img src={item.img} alt="" className="img-fluid"/>
                    <h3>{item.name}</h3>
                </div>
            )
        });

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                    
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                            >
                                
                            {items}
                        </Masonry>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;