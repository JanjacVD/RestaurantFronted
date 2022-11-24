import {createContext, ReactNode, useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import {infoUrl, menuUrl} from '../env/constants';
import {MenuInterface} from '../env/interfaces';

export const InfoContext = createContext<any>(null);
export default function InfoContextProvider({children}: {children: ReactNode}) {
    const [infoState, setInfoState] = useState<any>();
    const [menuState, setMenuState] = useState<MenuInterface | null>();
    useEffect(() => {
        axios.get(infoUrl).then((res) => {
            const info = res.data.data;
            setInfoState(info);
        }).catch(e => console.log(e));
        axios.get(menuUrl).then((res) => {
            const menu = res.data.data;
            const menuFilter = menu.filter((section: any) => {
                return section.categories.length > 0;
            });
            setMenuState(menuFilter);
        }).catch(e => console.log(e));
    }, []);
    const [currentLang, setCurrentLang] = useState<string>(
        (localStorage.getItem('RestaurantSimunLocale') || 'hr')
    );
    const changeLocale = (locale: string) => {
        setCurrentLang(locale);
        localStorage.setItem('RestaurantSimunLocale', locale);
    };
    return (
        <InfoContext.Provider
            value={{infoState, menuState, currentLang, changeLocale}}>
            {children}
        </InfoContext.Provider>
    );
}
