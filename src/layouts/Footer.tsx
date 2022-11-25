import './footer.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {useTranslation} from 'react-i18next';
export default function Footer() {
    const {t} = useTranslation();
    return (
        <footer>
            <div className="footer-left">
                <h3>
                    Restoran & Pizzeria <br /> Šimun
                </h3>
                <div className="links">
                    <Link to={'/'}>{t('footer.home')}</Link>
                    <Link to={'/menu'}>{t('footer.menu')}</Link>
                    <Link to={'/booking'}>{t('footer.booking')}</Link>
                    <Link to={'/contact'}>{t('footer.contact')}</Link>
                    <Link to={'/gallery'}>{t('footer.gallery')}</Link>
                    <Link to={'/privacy-policy'}>{t('footer.privacy')}</Link>
                </div>
                <p>U.O "Šimun" Vodice</p>
                <img
                    src={logo}
                    alt="Logo"
                    style={{marginTop: '1rem'}}
                    width={'70px'}
                />
            </div>
            <div className="footer-center">
                <div>
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                    <span>
                        Obala Ive Juričev Cota 26 <br /> Vodice, Croatia
                    </span>
                </div>
                <a href="tel:+385022443106">
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                    </svg>
                    <span>+385 (022) 443 106</span>
                </a>
                <a href="mailto: simun.vodice@gmail.com">
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"></path>
                    </svg>
                    <span>contact@restoran-simun.hr</span>
                </a>
            </div>
            <div className="footer-right">
                <p>{t('footer.visitSocial')}</p>
                <div className="socialLinks">
                    <a href="https://www.facebook.com/people/Restoran-Pizzeria-%C5%A0IMUN/100057658441282/">
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            aria-label="Facebook url">
                            <path
                                fill="#fff"
                                d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/382738485/croatia/vodice-croatia/restoran-pizzeria-simun/">
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            aria-label="Instagram url">
                            <path
                                fill="#fff"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                    </a>
                    <a href=" https://www.tripadvisor.com/Restaurant_Review-g608723-d10628830-Reviews-Restoran_Pizzeria_Simun-Vodice_Sibenik_Knin_County_Dalmatia.html">
                        <svg
                            aria-label="Trip Advisor url"
                            data-name="Trip advisor url"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -90 812.82 729.6">
                            <path
                                fill="#fff"
                                d="M346.87,517.5a71.94,71.94,0,1,0-71.93-71.93A71.94,71.94,0,0,0,346.87,517.5Z"
                                transform="translate(-143.89 -143.89)"
                            />
                            <circle
                                fill="#fff"
                                cx="608.53"
                                cy="301.68"
                                r="71.94"
                            />
                            <path
                                fill="#fff"
                                d="M144.1,445.57c0,112,90.78,202.77,202.77,202.77a202,202,0,0,0,137.81-54.05l65,70.73,65-70.69a202,202,0,0,0,137.77,54c112,0,202.86-90.79,202.86-202.77A202.29,202.29,0,0,0,889.13,295.7l66.35-72.19H808.39a459.49,459.49,0,0,0-517,0H143.89l66.35,72.19A202.28,202.28,0,0,0,144.1,445.57Zm745.55,0A137.23,137.23,0,1,1,752.42,308.34,137.23,137.23,0,0,1,889.65,445.57Zm-340-235.33A393.78,393.78,0,0,1,702,240.7c-86.61,33.14-152.28,110.62-152.28,200.91,0-90.3-65.69-167.79-152.31-200.92A393.7,393.7,0,0,1,549.65,210.24Zm-202.78,98.1A137.23,137.23,0,1,1,209.64,445.57,137.23,137.23,0,0,1,346.87,308.34Z"
                                transform="translate(-143.89 -143.89)"
                            />
                        </svg>
                    </a>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11526.25975660834!2d15.7703291!3d43.7611305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9cc76463ff95890f!2sRESTORAN%20%26%20PIZZERIA%20%C5%A0IMUN!5e0!3m2!1shr!2shr!4v1666399408505!5m2!1shr!2shr"
                    style={{border: 0}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <a
                className="author"
                href="https://www.linkedin.com/in/valentino-janjac-bab165235/">
                Made By: Valentino Janjac
            </a>
        </footer>
    );
}
