import React from "react";
import styles from "./CardItem.module.css";


const CardItem = props => {
    const bg = props.source;
    const imgStyle = [styles.imgSize, 'img-fluid'];

    return (
        <div className="my-3">
            <h3>{props.name}</h3>
            <img className={imgStyle.join(' ')} alt="" src={bg} />
        </div>
    );
};

export default CardItem;
