import React from "react";
import styles from "./CardItem.module.css";
import './setCarouselPositions.css';


const CardItem = props => {
    const bg = props.source;
    const imgStyle = [styles.imgSize, 'img-fluid'];

    const bgImg = {
        backgroundImage: `url(${props.bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="carousel-wrapper position-relative" style={bgImg}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12 align-items-center d-flex mb-5">
                          <div class="w-75">
                                <h1 className="text-white mb-4">{props.name}</h1>

                                <h2>Introducing the <i><u>Embrace The Sun</u></i> Collection</h2>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Provident natus possimus magni delectus explicabo nobis sunt cumque odio quisquam maiores!
                                    Maiores necessitatibus officia excepturi commodi recusandae nulla iure non quia.
                                </p>
                          </div>
                    </div>
                </div>
            </div>

            {/* <img className={imgStyle.join(' ')} alt="" src={bg} /> */}
        </div>
    );
};

export default CardItem;
