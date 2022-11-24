import {NavLink} from 'react-router-dom';
import React from 'react';
interface TranslationInterface{
    en: string,
    hr: string,
}
export default function NavigationButton({
    title,
    setNavToggled,
    navStatus,
    linkTo,
    currentLang
}: {
    title: TranslationInterface;
    setNavToggled: any;
    navStatus: boolean;
    linkTo: string;
    currentLang: 'en' | 'hr';
}) {
    function navClicked() {
        setNavToggled(!navStatus);
    }
    return (
        <NavLink
            end
            className={({isActive}) => (isActive ? 'activeLink' : '')}
            onClick={() => navClicked()}
            to={linkTo}
        >
            {title[currentLang]}
        </NavLink>
    );
}
