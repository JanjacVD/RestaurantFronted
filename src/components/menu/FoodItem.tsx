import React, {useState, useContext} from 'react';
import Alergen from './FoodAlergen';
import {InfoContext} from '../../state/info.state';
export default function FoodItem({
    title,
    description,
    price,
    alergens,
}: {
    title: any;
    description: any;
    price: number;
    alergens: any;
}) {
    const [showMoreDisplayed, setShowMoreDisplayed] = useState<boolean>(false);
    const countOfAlergens = alergens.length;
    const {currentLang} = useContext(InfoContext);

    return (
        <div
            className="foodItem"
            onClick={() => setShowMoreDisplayed(!showMoreDisplayed)}>
            <div className="priceAndTitle">
                <h6>{title[currentLang]}</h6>
                <p>
                    {(price / 7.5345).toFixed(2)} € / {price} kn
                </p>
            </div>

            <div
                className={
                    showMoreDisplayed ? 'details details-toggled' : 'details'
                }>
                <div className="details-text">
                    <b>
                        <p>{title[currentLang]}</p>
                    </b>
                    <div className="description">
                        <p>{description[currentLang]}</p>
                    </div>
                    {countOfAlergens > 0 ? (
                        <div className="alergens">
                            Alergens:
                            {alergens.map((alergen: any, index: number) => {
                                return (
                                    <Alergen
                                        title={alergen.title[currentLang]}
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
                    <p>
                        {(price * 7.5345).toFixed(2)} € / {price} kn
                    </p>
                </div>
            </div>
        </div>
    );
}
