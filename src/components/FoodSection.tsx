import React, {useState} from 'react';
import FoodCategory from './FoodCategory';
export default function FoodSection(props: any) {
    const title = props.title;
    const categories = props.categories;
    const order = props.order;
    return (
        <div className="foodSection">
            <h1>{title['en']}</h1>
            {categories.map((cat: any, index: number) => {
                return <FoodCategory {...cat} key={index} />;
            })}
        </div>
    );
}
