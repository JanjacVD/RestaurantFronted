import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/hr';
import {useMemo, useState, SetStateAction, Dispatch} from 'react';
import '../css/datepicker.css';
export default function Datepicker({
    minDate,
    maxDate,
    lang,
    disabledDays,
    disabledDates,
    value,
    dispatch,
}: {
    minDate?: number;
    maxDate?: number;
    lang: string;
    disabledDays?: number[];
    disabledDates?: Date[];
    value: Date;
    dispatch: Dispatch<SetStateAction<Date>>;
}) {
    const todayDate = new Date();
    const [currMonth, setCurrMonth] = useState(value.getMonth());
    const [currYear, setCurrYear] = useState(todayDate.getFullYear());
    const days = useMemo(
        () => getDays(currYear, currMonth),
        [currMonth, currYear],
    );
    const disabledDatesArr = disabledDates?.map(date => {
        return moment(date).format('Y-D-M')
    })
    const [datepickerDisplayed, setDatepickerDisplayed] =
        useState<boolean>(false);
    const isDisabled = (date: Date): boolean => {
        const max = maxDate
            ? new Date(
                  todayDate.getFullYear(),
                  todayDate.getMonth(),
                  todayDate.getDate() + maxDate,
              )
            : 0;
        const min = minDate
            ? new Date(
                  todayDate.getFullYear(),
                  todayDate.getMonth(),
                  todayDate.getDate() + minDate,
              )
            : 0;
        if (
            disabledDays?.includes(date.getDay()) ||
            disabledDatesArr?.includes(moment(date).format('Y-D-M')) ||
            (max && date > max) ||
            (min && date < min)
        ) {
            return true;
        }
        return false;
    };

    const daysOfWeek = [1, 2, 3, 4, 5, 6, 0];
    function getDays(y: number, m: number) {
        const numOfDays = new Date(y, m + 1, 0).getDate();
        let dates = [];
        for (let i = 1; i <= numOfDays; i++) {
            let newDate = new Date(y, m, i);
            dates.push(newDate);
        }
        return dates;
    }
    function changeMonth(
        e: React.MouseEvent<HTMLButtonElement>,
        direction: number,
    ) {
        e.preventDefault();
        switch (direction) {
            case 1:
                setCurrMonth(currMonth + 1);
                if (currMonth === 11) {
                    setCurrYear(currYear + 1);
                    setCurrMonth(0);
                }
                break;
            case 0:
                setCurrMonth(currMonth - 1);
                if (currMonth === 0) {
                    setCurrYear(currYear - 1);
                    setCurrMonth(11);
                }
                break;
            default:
                return;
        }
    }
    const displayDatepicker = () => {
        setDatepickerDisplayed(!datepickerDisplayed);
    };
    function setDate(e: React.MouseEvent<HTMLButtonElement>, day: Date) {
        e.preventDefault();
        dispatch(day);
        displayDatepicker();
    }
    return (
        <>
            <input
                type="text"
                value={value.toLocaleDateString()}
                onClick={displayDatepicker}
                readOnly
                onKeyDown={() => {
                    return false;
                }}
                style={{cursor: 'pointer'}}
            />
            <div
                className={
                    datepickerDisplayed
                        ? 'datepicker-backdrop-active datepicker-backdrop'
                        : 'datepicker-backdrop'
                }
                onClick={displayDatepicker}>
                <div
                    className="datepicker"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <div className="top-track">
                        <button
                            className="prev-btn"
                            onClick={(e) => changeMonth(e, 0)}>
                            ⟵
                        </button>
                        <div style={{textTransform: 'capitalize'}}>
                            {moment(new Date(0, currMonth + 1, 0))
                                .locale(lang === 'hr' ? 'hr' : 'en-gb')
                                .format('MMMM')}{' '}
                            {currYear}
                        </div>

                        <button
                            className="next-btn"
                            onClick={(e) => changeMonth(e, 1)}>
                            ⟶
                        </button>
                    </div>

                    <div className="days">
                        {daysOfWeek.map((day: number, index: number) => {
                            return (
                                <div className="dayName" key={index}>
                                    {moment(new Date(0, 0, day))
                                        .locale(lang === 'hr' ? 'hr' : 'en-gb')
                                        .format('ddd')
                                        .slice(0, 3)}
                                </div>
                            );
                        })}
                        {days.map((day, index) => {
                            let span = day.getDay() === 0 ? 7 : day.getDay();
                            return (
                                <button
                                    aria-label={`Set the selected date to ${day.toLocaleDateString()}`}
                                    key={index}
                                    disabled={isDisabled(day)}
                                    style={{gridColumn: span}}
                                    onClick={(e) => setDate(e, day)}
                                    className={
                                        value.toLocaleDateString() ===
                                        day.toLocaleDateString()
                                            ? 'selected-date'
                                            : ''
                                    }>
                                    {day.getDate()}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
