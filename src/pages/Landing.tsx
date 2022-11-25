import '../css/landing.css';
import React, {useContext} from 'react';
import aboutImg from '../assets/images/about.jpg';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';
import {InfoContext} from '../state/info.state';
import {SuperSEO} from 'react-super-seo/dist/components/SuperSEO';
import Loading from '../layouts/Loading';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import 'moment/locale/hr';
import 'moment/locale/en-gb';
export default function Landing() {
    const {t} = useTranslation();
    const {infoState, currentLang} = useContext<any>(InfoContext);
    const l: string = logo;
    if (!infoState) {
        return <Loading />;
    } else {
        return (
            <div>
                <SuperSEO
                    title="Restoran & Pizzeria Šimun | Home"
                    description={infoState[currentLang]}
                    lang={currentLang}
                    openGraph={{
                        ogImage: {
                            ogImage: l,
                            ogImageAlt: 'Logo',
                            ogImageWidth: 630,
                            ogImageHeight: 630,
                            ogImageType: 'image/png',
                        },
                    }}
                    twitter={{
                        twitterSummaryCard: {
                            summaryCardImage: l,
                            summaryCardImageAlt: 'Logo',
                            summaryCardSiteUsername: 'Simun',
                        },
                    }}
                />
                <div className="hero">
                    <h1>
                        Restoran & Pizzeria <br /> Šimun
                    </h1>
                    <div className="workTime">
                        {infoState.is_open ? (
                            <div>
                                {t('landing.hero.work')}:
                                <div className="days" style={{textTransform:'capitalize'}}>
                                    {moment(
                                        '2022-2-' + infoState.day_from,
                                    ).locale(currentLang === 'hr' ? 'hr' : 'en-gb').format('dddd')}{' '}
                                    -{' '}
                                    {moment(
                                        '2022-2-' + infoState.day_to,
                                    ).locale(currentLang === 'hr' ? 'hr' : 'en-gb').format('dddd')}
                                </div>
                                <div className="time">
                                    {infoState.time_from} - {infoState.time_to}
                                </div>
                            </div>
                        ) : (
                            <div>Zatvoreno</div>
                        )}
                        <br />
                    </div>
                </div>
                <section id="about">
                    <img src={aboutImg} alt="Bottles of welcome drinks" />
                    <div className="aboutus-box">
                        <h2 className="title-text">
                            {t('landing.about.title')}
                        </h2>
                        <p className="randomtext">{t('landing.about.text')}</p>
                        <div className="about-buttons">
                            <Link to={'/booking'} className="about-btn">
                                {t('landing.about.buttons.book')}
                            </Link>
                            <Link to={'/menu'} className="about-btn">
                                {t('landing.about.buttons.check')}
                            </Link>
                        </div>
                    </div>
                    <div className="friendly-box">
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <circle cx="12" cy="4" r="2"></circle>
                                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.wheel')}
                            </p>
                        </div>
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <circle cx="4.5" cy="9.5" r="2.5"></circle>
                                <circle cx="9" cy="5.5" r="2.5"></circle>
                                <circle cx="15" cy="5.5" r="2.5"></circle>
                                <circle cx="19.5" cy="9.5" r="2.5"></circle>
                                <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.pet')}
                            </p>
                        </div>
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51zm3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89zm3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69 0-1.51-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.google')}
                            </p>
                        </div>
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.pay')}
                            </p>
                        </div>
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 18V6h10v12H7zm9-7V9.14C16 8.51 15.55 8 15 8H9c-.55 0-1 .51-1 1.14v1.96c.55 0 1 .45 1 1s-.45 1-1 1v1.76c0 .63.45 1.14 1 1.14h6c.55 0 1-.51 1-1.14V13c-.55 0-1-.45-1-1s.45-1 1-1zm-3.5 3.5h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.book')}
                            </p>
                        </div>
                        <div className="icon">
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24">
                                <path d="m2 22 14-5-9-9zm12.53-9.47 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59 1.06 1.06zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zm7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0zm-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z"></path>
                            </svg>
                            <p className="icon-text">
                                {t('landing.about.icons.private')}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
