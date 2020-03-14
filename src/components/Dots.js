import React from "react";
import styles from "./CardItem.module.css";

const Dots = props => {
    const dotsClasses = [styles.dots];
    
    if (props.isDotActive) {
        dotsClasses.push(styles.isActive);
    }
    
    return (
        <div onClick={props.clickDots} className={dotsClasses.join(' ')} isACtive={props.active} >

        </div>
    );
};

export default Dots;
