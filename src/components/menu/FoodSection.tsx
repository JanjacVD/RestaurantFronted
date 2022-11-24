import React, {useContext} from 'react';
import {InfoContext} from '../../state/info.state';
import FoodCategory from './FoodCategory';
export default function FoodSection({
    title,
    categories,
}: {
    title: any[];
    categories: any;
}) {
    const {currentLang} = useContext(InfoContext);
    return (
        <div className="foodSection">
            <h2>{title[currentLang]}</h2>
            {categories.map((cat: any, index: number) => {
                return <FoodCategory {...cat} key={index} />;
            })}
        </div>
    );
}
