import React from "react";
import styles from "../../Carousel/CardItem.module.css";
    
const Dots = props => {
    const dotsClasses = [styles.dots];
    
    if (props.isDotActive) {
        dotsClasses.push(styles.isActive);
    }
    
    return (
        <span onClick={props.clickDots} className={dotsClasses.join(' ')} ></span>
    );
};

export default Dots;
