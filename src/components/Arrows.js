import React from 'react';
import arrowLeft from '../assets/images/left-arrow.png'
const FontAwesomeIcon = require('react-fontawesome');

const Arrows = props => {
    
    return (
        // <FontAwesomeIcon
        //     className='fa-right text-white d-none'
        //     name="fas fa-angle-right"
        //     size='3x'
        // />

        <div className="arrows-wrapper ml-auto mt-5">
            <img className="d-none" src={arrowLeft} alt=""/>
            <div className="arrow-left" onClick={props.moveSliderLeft}></div>
            
            <div className="arrow-right" onClick={props.moveSliderRight} href="#"></div>
        </div>
    )
}

export default Arrows;