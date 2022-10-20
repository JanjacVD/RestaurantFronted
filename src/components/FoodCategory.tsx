import React from 'react';
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
    return (
        <div className="foodCategory">
            <h4>{title['en']}</h4>
            <div className="items">
                {items.map((item: any, index: number) => {
                    return <FoodItem {...item} key={index} />;
                })}
            </div>
        </div>
    );
}
