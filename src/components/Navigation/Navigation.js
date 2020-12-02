import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


const Navigation = ({ links, children, toggleCateg }) => {
    const location = useLocation();

    let [subLinks, setSublinks] = useState([])
    let [pos, setPos] = useState('position-absolute');

    const getSubLinksNav = () => {
        // get all the links with submenu
        const linksWithSubmenu = links.filter(link => {
            return link.submenu
        });

        //navigate through through all links with submenu
        for (let link of linksWithSubmenu) {
            // all submenus
            for (let subLink of link.submenu) {
                setSublinks(preSubLinks => [...preSubLinks, subLink.path])
            }
        }
    }

    const changeMenuPosBasedOnSubLinks = () => {
        if (subLinks.includes(location.pathname)) {
            setPos('bg-dark')
        } else {
            setPos('position-absolute');
        }
    }
    // run once
    useEffect(() => {
        getSubLinksNav();
    }, []);

    useEffect(() => {
        changeMenuPosBasedOnSubLinks();
    });

    const classNameCat = toggleCateg ? "d-block" : "d-none";

    return (
        <>
            <div className={`container-fluid menu ${pos}`}>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {children}
                        </div>

                        <div className='col-lg-12'>
                            <div
                                style={{ right: "0", top: 0, color: "black" }}
                                className={`text-right ${classNameCat} position-absolute  bg-dark p-3 text-white`}>
                                <h6 className='a-c1'>House span</h6>
                                <h6 className='a-c2'>Club / Bar</h6>
                                <h6 className='a-c3'>World</h6>
                                <h6 className='a-c4'>Business Office</h6>
                                <h6 className='a-c5'>Hotel / Resport</h6>
                                <h6 className='a-c6'>Shopping Mall</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;