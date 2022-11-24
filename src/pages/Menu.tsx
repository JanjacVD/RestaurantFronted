import React, {useEffect, useState, useContext, Suspense} from 'react';
import FoodSection from '../components/menu/FoodSection';
import '../css/menu.css';
import {InfoContext} from '../state/info.state';
import Loading from '../layouts/Loading';
import {SuperSEO} from 'react-super-seo';
export default function Menu() {
    const {menuState} = useContext<any>(InfoContext);
    if (!menuState) {
        return <Loading />;
    }
    return (
        <div className="menuMain">
            <div className="banner">
                <div className="img"></div>
                <h1>Menu</h1>
            </div>
            {menuState.map((section: any, index: number) => {
                return <FoodSection key={index} {...section} />;
            })}
        </div>
    );
}
