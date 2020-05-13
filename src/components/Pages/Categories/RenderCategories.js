import React  from 'react';
import './categories.scss';

function RenderCategories(props) {
    return (
        <div alt={props.name} href="" className="item-categ">
            <img alt="" src={props.img}/>

            <div className="item-categ_details">
                <h1 className="item-categ_name mb-3">{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default RenderCategories;