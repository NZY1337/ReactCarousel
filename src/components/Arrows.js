import React from 'react';

const FontAwesomeIcon = require('react-fontawesome');

const Arrows = props => {
    return (
        <div className="arrows-wrapper">
            <span href="#" onClick={props.moveSliderLeft}>
                <FontAwesomeIcon
                    
                    className='fa-left mr-4'
                    name="fas fa-angle-left"
                    size='3x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </span>
            
            <span onClick={props.moveSliderRight} href="#">
                <FontAwesomeIcon
                    className='fa-right'
                    name="fas fa-angle-right"
                    size='3x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </span>
        </div>
    )
}

export default Arrows;