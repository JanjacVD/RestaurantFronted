import {createContext, ReactNode, useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import {menuUrl} from '../../env/constants';
export const MenuContext = createContext(null);
export default function MenuContextProvider({children}: {children: ReactNode}) {
    const [menuState, setMenuState] = useState<any>();
    useEffect(() => {
        axios.get(menuUrl).then((res) => {
            const menu = res.data.data;
            const menuFilter = menu.filter((section: any) => {
                return section.categories.length > 0;
            });
            setMenuState(menuFilter);
            console.log(menuFilter);
        });
    }, []);
    return (
        <MenuContext.Provider value={menuState}>
            {children}
        </MenuContext.Provider>
    );
}
