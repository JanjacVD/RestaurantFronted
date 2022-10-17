import React, {useState} from 'react';
import Alergen from './FoodAlergen';
export default function FoodItem({
    title,
    description,
    price,
    order,
    alergens,
}: {
    title: any;
    description: any;
    price: any;
    order: any;
    alergens: any;
}) {
    const [showMoreContent, setShowMoreContent] = useState();
    const [showMoreDisplayed, setShowMoreDisplayed] = useState<boolean>(false);
    const countOfAlergens = alergens.length;
    return (
        <div className="foodItem">
            <div className="priceAndTitle">
                <h6>{title['en']}</h6>
                <p>{price} kn</p>
            </div>
            <div className="description">
                <p>{description['en']}</p>
            </div>
            <div className="alergens">
                {alergens.map((alergen: any, index: number) => {
                    return (
                        <Alergen
                            title={alergen.title['en']}
                            count={countOfAlergens}
                            key={index}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
