import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {menuUrl} from '../env/constants';
import FoodSection from '../components/FoodSection';
import '../css/menu.css';
export default function Menu() {
    const [menuLoaded, setMenuLoaded] = useState<boolean>(false);
    const [menu, setMenu] = useState<any>();
    useEffect(() => {
        axios.get(menuUrl).then((res) => {
            setMenu(res.data.data);
            console.log(res.data.data);
            setMenuLoaded(true);
        });
    }, []);
    return (
        <div className="menuMain">
            {menuLoaded && menu !== undefined
                ? menu.map((section: any, index: number) => {
                      return <FoodSection {...section} key={index} />;
                  })
                : 'loading'}
        </div>
    );
}
