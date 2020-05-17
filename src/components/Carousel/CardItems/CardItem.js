import React from "react";
import styles from "../../Carousel/CardItem.module.css";  
import '../../Carousel/setCarouselPositions.css';

const CardItem = props => {
    const bg = props.source;
    const imgStyle = [styles.imgSize, 'img-fluid'];
        
    return (
        <div class="carousel-info pl-3">
            <h3 className="carousel-id">0.{props.cardId + 1}</h3>

            <h1 className="text-white mb-2">{props.name}</h1>
            
            <h3 class="mb-5">Introducing the <i><u>Embrace The Sun</u></i> Collection</h3>

            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Provident natus possimus magni delectus explicabo nobis sunt cumque odio quisquam maiores!
                Maiores necessitatibus officia excepturi commodi recusandae nulla iure non quia.
            </p>

            {/* <p className="text-white carousel-category">{props.category}</p> */}
        </div>
    );
};

export default CardItem;
