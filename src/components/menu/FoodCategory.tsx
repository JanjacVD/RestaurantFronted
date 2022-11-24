import React, {useContext} from 'react';
import {InfoContext} from '../../state/info.state';
import FoodItem from './FoodItem';

export default function FoodCategory({
    title,
    items,
    order,
}: {
    title: any;
    items: any;
    order: number;
}) {
    const {currentLang} = useContext(InfoContext);

    return (
        <div className="foodCategory">
            <h4>{title[currentLang]}</h4>
            <div className="items">
                {items.map((item: any, index: number) => {
                    return <FoodItem {...item} key={index} />;
                })}
            </div>
        </div>
    );
}
