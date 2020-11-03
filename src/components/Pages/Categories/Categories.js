import React, {Component} from 'react';
import RenderCategories from './RenderCategories';

import img1 from '../../../assets/images/thumbnail1.jpg';
import img2 from '../../../assets/images/thumbnail2.jpg';
import img3 from '../../../assets/images/thumbnail3.jpg';
import img4 from '../../../assets/images/thumbnail4.jpg';

class Categories extends Component {
    constructor(props) {
        super(props)
             
        this.state = {
            items : [
                {
                    id: 1, 
                    name: 'Ocean & Oaks', 
                    img: img1,
                    description: "Interior designers make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items...",
                    categ: 'abstract'
                },
                {
                    id: 2, 
                    name: 'Ventana Bloom', 
                    img: img2,
                    description: 'To take the Big Five personality assessment, rate each statement according to how well it describes you. Base your ratings on how you really...',
                    categ: 'mimalistic'
                },
                
                {
                    id: 3, 
                    name: 'The Challenge', 
                    img: img3,
                    description: 'This free personality test gives you accurate scores for the Big Five personality traits. See exactly how you score for Openness, Conscientiousness...',
                    categ: 'contemporary'
                },

                {
                    id: 4, 
                    name: 'The N.Y. Kitchen', 
                    img: img4,
                    description: "Healthcare designers use the evidence-based design process in designing and renovating healthcare centers, clinics, doctors' offices, hospitals...",
                    categ: 'futuristic'
                },
            ]
        }
    }
    
    render() {
        const items = this.state.items.map(item => {
            return (
                < RenderCategories 
                    name={item.name}
                    img={item.img}
                    description={item.description}
                />
            )
        });
            
        return (
            <div className="w-100 categ-wrapper">
                {items}
            </div>
        )
    }
}

export default Categories;