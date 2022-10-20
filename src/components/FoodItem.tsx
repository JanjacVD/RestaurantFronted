import React, {useState} from 'react';
import Alergen from './FoodAlergen';
export default function FoodItem({
    title,
    description,
    price,
    alergens,
}: {
    title: any;
    description: any;
    price: any;
    alergens: any;
}) {
    const [showMoreDisplayed, setShowMoreDisplayed] = useState<boolean>(false);
    const countOfAlergens = alergens.length;
    return (
        <div
            className="foodItem"
            onClick={() => setShowMoreDisplayed(!showMoreDisplayed)}
        >
            <div className="priceAndTitle">
                <h6>{title['en']}</h6>
                <p>{price} kn</p>
            </div>
            <div
                className={
                    showMoreDisplayed ? 'details details-toggled' : 'details'
                }
            >
                <div className="details-text">
                    <b>
                        <p>{title['en']}</p>
                    </b>
                    <div className="description">
                        <p>{description['en']}</p>
                    </div>
                    {countOfAlergens > 0 ? (
                        <div className="alergens">
                            Alergens:
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
                    ) : (
                        ''
                    )}
                    <p>{price} kn</p>
                </div>
            </div>
        </div>
    );
}
