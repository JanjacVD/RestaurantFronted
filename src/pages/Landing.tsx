import axios from 'axios';
import '../css/landing.css';
import React, {useEffect, useState, useMemo} from 'react';
import {infoUrl} from '../env/constants';
export default function Landing() {
    const [info, setInfo] = useState<any>(null);
    useEffect(() => {
        axios.get(infoUrl).then((res) => {
            setInfo(res.data.data);
            console.log(res.data.data);
        });
    }, []);
    const days = [
        {en: 'Mon', hr: 'Pon'},
        {en: 'Tue', hr: 'Uto'},
        {en: 'Wed', hr: 'Sri'},
        {en: 'Thu', hr: 'Čet'},
        {en: 'Fri', hr: 'Pon'},
        {en: 'Sat', hr: 'Sub'},
        {en: 'Sun', hr: 'Ned'},
    ];
    if (!info) {
        return <div>loading</div>;
    } else {
        return (
            <div>
                <div className="hero">
                    <h1>
                        Restoran & Pizzeria <br /> Šimun
                    </h1>
                    <div className="workTime">
                        {info.is_open ? (
                            <div>
                                Radno vrijeme:
                                <div className="days">
                                    {days[info.day_from]['en']} -{' '}
                                    {days[info.day_to]['en']}
                                </div>
                                <div className="time">
                                    {info.time_from} - {info.time_to}
                                </div>
                            </div>
                        ) : (
                            <div>Zatvoreno</div>
                        )}
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
