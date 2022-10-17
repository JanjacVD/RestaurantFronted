import {NavLink} from 'react-router-dom';
import React from 'react';
export default function NavigationButton({
    title,
    setNavToggled,
    navStatus,
    linkTo,
}: {
    title: string;
    setNavToggled: any;
    navStatus: boolean;
    linkTo: string;
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
            {title}
        </NavLink>
    );
}
