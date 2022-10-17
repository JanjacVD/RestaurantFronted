import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import './nav.css';
import NavigationButton from './components/NavigationButton';
export default function Navbar() {
    const [navToggled, setNavToggled] = useState<boolean>(false);
    const navLinks = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'Menu',
            path: '/menu',
        },
    ];
    return (
        <>
            <nav>
                <div className="logo">LOGO HERE</div>
                <div
                    onClick={() => setNavToggled(!navToggled)}
                    id="nav-icon3"
                    className={navToggled ? 'open' : ''}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <header
                className={
                    navToggled ? 'offcanvas offcanvasActive' : 'offcanvas'
                }
            >
                {navLinks.map((nav, index) => {
                    let btn = {
                        title: nav.title,
                        setNavToggled: setNavToggled,
                        navStatus: navToggled,
                        linkTo: nav.path,
                    };
                    return <NavigationButton {...btn} key={index} />;
                })}
            </header>
        </>
    );
}
