import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import FoodSection from '../components/FoodSection';
import '../css/menu.css';
import {MenuContext} from '../state/menu/menu.state';
export default function Menu() {
    const menuItems = useContext<any>(MenuContext);

    if (!menuItems) {
        return <div>Loading</div>;
    }
    return (
        <div className="menuMain">
            <h1>Menu</h1>
            {menuItems.map((section: any, index: number) => {
                return <FoodSection key={index} {...section} />;
            })}
        </div>
    );
}
