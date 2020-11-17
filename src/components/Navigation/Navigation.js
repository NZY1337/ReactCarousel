import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


const Navigation = ({ links, children }) => {
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
            setPos('position-relative')
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


    // useEffect(() => {
    //     changeMenuPosBasedOnSubLinks();
    // }, [location]);





    // if (location.pathname === sublink.path) {
    //     setPosition('position-relative')
    // } else {
    //     setPosition('position-absolute')
    // }





    return (
        <>
            <div className={`container-fluid menu ${pos}`}>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;