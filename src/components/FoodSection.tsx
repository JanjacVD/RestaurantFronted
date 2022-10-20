import React from 'react';
import FoodCategory from './FoodCategory';
export default function FoodSection({
    title,
    categories,
}: {
    title: any;
    categories: any;
}) {
    return (
        <div className="foodSection">
            <h1>{title['en']}</h1>
            {categories.map((cat: any, index: number) => {
                return <FoodCategory {...cat} key={index} />;
            })}
        </div>
    );
}
