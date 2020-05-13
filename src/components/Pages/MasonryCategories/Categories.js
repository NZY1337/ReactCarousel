import React, {Component} from 'react';
import './Categories.scss';
import Masonry from 'react-masonry-css'



class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items : [
                {id: 1, name: 'Ocean & Oaks', img: 'https://images.pexels.com/photos/3751009/pexels-photo-3751009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 2, name: 'Ventana Bloom', img: 'https://images.pexels.com/photos/4005801/pexels-photo-4005801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 3, name: 'The Challenge', img: 'https://images.pexels.com/photos/4035323/pexels-photo-4035323.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
                {id: 4, name: 'The N.Y. Kitchen', img: 'https://images.pexels.com/photos/3586911/pexels-photo-3586911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 5, name: 'Visual Display\'s Office Design', img: 'https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 5, name: '14 Interiors Redesigned', img: 'https://images.pexels.com/photos/3979732/pexels-photo-3979732.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}
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
           
            return (
                <div className="masonry-item" key={item.id}>
                    <h3 class="mb-3">{item.name}</h3>
                         
                    <a href="#" className="text-white">
                        <div className="masonry-item-overlay">
                            <img src={item.img} alt="" className="img-fluid"/>
                            <div className="masonry-item-overlay-bg d-flex align-items-center justify-content-center">
                                
                                <h6 className="show-more">Show More</h6>
                                
                            </div>
                            
                            <span className="plus-mini"></span>
                            <span className="plus"></span>
                        </div>
                    </a>
                </div>
            )
        });

        return (
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 masonry-wrapper">
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