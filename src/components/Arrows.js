import React from 'react';
import styles from "./CardItem.module.css";
const FontAwesomeIcon = require('react-fontawesome');

const Arrows = props => {
    return (
        <div className="arrows-wrapper">

            <a href="#" onClick={props.moveSliderLeft}>
                <FontAwesomeIcon
                    
                    className='fa-left mr-4'
                    name="fas fa-angle-left"
                    size='3x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </a>
            
            <a onClick={props.moveSliderRight} href="#">
                <FontAwesomeIcon
                    className='fa-right'
                    name="fas fa-angle-right"
                    size='3x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </a>

        </div>
    )
}

export default Arrows;