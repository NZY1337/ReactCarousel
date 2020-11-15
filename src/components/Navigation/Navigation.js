import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


const Navigation = (props) => {
    const location = useLocation();

    let [position, setPosition] = useState('position-absolute');

    useEffect(() => {
        if (location.pathname === '/') {
            setPosition('position-absolute')
        } else {
            setPosition('position-relative')
        }
    }, [location]);


    return (
        <>
            <div className={`container-fluid menu ${position}`}>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;