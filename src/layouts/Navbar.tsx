import React, {useState, useContext} from 'react';
import './nav.css';
import logo from '../assets/images/logo.png';
import globe from '../assets/images/globe.png';
import NavigationButton from './components/NavigationButton';
import {InfoContext} from '../state/info.state';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const {changeLocale, currentLang} = useContext(InfoContext);
    const navLinks: any = [
        {
            title:{
                hr: 'Naslovnica',
                en: 'Homepage'
            },
            path: '/',
        },
        {
            title:{
                hr: 'Jelovnik',
                en: 'Menu'
            },
            path: '/menu',
        },
        {
            title:{
                hr: 'Rezervacije',
                en: 'Booking'
            },
            path: '/booking',
        },
        {
            title:{
                hr: 'Kontakt',
                en: 'Contact'
            },
            path: '/contact',
        },
        {
            title:{
                hr: 'Galerija',
                en: 'Gallery'
            },
            path: '/gallery',
        },
    ];
    const langs = [{
        lang: 'English',
        lang_code: 'en'
    },
    {
        lang: 'Hrvatski',
        lang_code: 'hr'
    }
]
    const [navToggled, setNavToggled] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0);
    const [navSeen, setNavSeen] = useState<boolean>(true);
    const [displayLangSelection, setDisplayLangSelection] =
        useState<boolean>(false);
    const hadnelScroll = (ev: any) => {
        const current = window.pageYOffset;
        current > offset ? setNavSeen(false) : setNavSeen(true);
        setOffset(current);
    };
    window.addEventListener('scroll', hadnelScroll);
    return (
        <>
            <nav className={navSeen ? 'navToggled' : 'navHidden'}>
                <Link to={'/'} className={navToggled ? 'logo logo-hidden' : 'logo'}>
                    ŠIMUN
                </Link>
                <div
                    onClick={() => {
                        setNavToggled(!navToggled);
                        setDisplayLangSelection(false);
                    }}
                    id="nav-icon3"
                    className={navToggled ? 'open' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <header
                className={
                    navToggled ? 'offcanvas offcanvasActive' : 'offcanvas'
                }>
                <div className="links">
                    <div
                        onClick={() => {
                            setNavToggled(!navToggled);
                            setDisplayLangSelection(false);
                        }}
                        id="nav-icon3"
                        className={
                            navToggled
                                ? 'offcanvas-icon open'
                                : 'offcanvas-icon'
                        }>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {navLinks.map((nav: any, index: any) => {
                        let btn = {
                            title: nav.title,
                            setNavToggled: setNavToggled,
                            navStatus: navToggled,
                            linkTo: nav.path,
                            currentLang: currentLang
                        };
                        return <NavigationButton {...btn} key={index} />;
                    })}
                    <a
                        aria-label="Toggle language selection"
                        style={{marginTop: '90px'}}
                        onClick={() => {
                            setDisplayLangSelection(true);
                        }}>
                        <img src={globe} alt="Globe icon  " />
                    </a>
                </div>
                <img style={{marginBottom:'5rem'}} src={logo} alt="Logo" />
            </header>
            <div
                className={
                    displayLangSelection && navToggled
                        ? 'offcanvasLang offcanvasLang-active'
                        : 'offcanvasLang'
                }>
                <button
                    aria-label="Go back"
                    onClick={() => setDisplayLangSelection(false)}>
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                </button>
                <ul>
                    {langs.map((lang: any, index: number) => {
                        return (
                            <li className="links" key={index}>
                                <button
                                    className={
                                        currentLang == lang.lang_code
                                            ? 'activeLink'
                                            : ''
                                    }
                                    onClick={() => {
                                        changeLocale(lang.lang_code);
                                        setDisplayLangSelection(false);
                                    }}
                                    aria-label={`Change Language to 
                                  ${lang.lang}`}>
                                    {lang.lang}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
