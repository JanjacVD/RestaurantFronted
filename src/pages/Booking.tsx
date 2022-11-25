import axios from 'axios';
import moment from 'moment';
import {
    useState,
    useContext,
    SetStateAction,
    Dispatch,
    useMemo,
    useEffect,
} from 'react';
import Datepicker from '../components/Datepicker';
import '../css/booking.css';
import {disabledDatesUrl, disabledTimesUrl} from '../env/constants';
import {sendReservation} from '../hooks/sendReservationRequest';
import Loading from '../layouts/Loading';
import {InfoContext} from '../state/info.state';
import {useTranslation} from 'react-i18next';
interface StepInterface {
    step: number;
    title: any;
}
export default function Booking() {
    const [step, setStep] = useState<number>(0);
    const {t} = useTranslation();
    const {infoState, currentLang} = useContext(InfoContext);
    if (!infoState) {
        return <Loading />;
    } else if (!infoState.is_open || !infoState.reservations_open) {
        return (
            <div
                className="booking-form"
                style={{width: '100vw', height: '100vh', display: 'flex'}}>
                <h1
                    style={{
                        margin: 'auto',
                        textTransform: 'uppercase',
                        color: '#fff',
                    }}>
                    Curently unavailable
                </h1>
            </div>
        );
    }

    const steps: StepInterface[] = [
        {
            step: 0,
            title: {
                en: 'What day?',
                hr: 'Datum?',
            },
        },
        {
            step: 1,
            title: {
                en: 'What time?',
                hr: 'Vrijeme?',
            },
        },
        {
            step: 2,
            title: {
                en: 'How many?',
                hr: 'Broj osoba?',
            },
        },
        {
            step: 3,
            title: {
                en: 'Finish',
                hr: 'Završite',
            },
        },
    ];
    //TODO: If infostate reservations_isopen is false return disabled screen or if is not open
    return (
        <div className="booking-form">
            <form>
                <h1>{t('booking.title')}</h1>
                <div className="step-count">
                    {steps.map((s) => {
                        return (
                            <span
                                key={s.step}
                                className={step === s.step ? 'active' : ''}>
                                {s.title[currentLang]}
                            </span>
                        );
                    })}
                </div>
                <Stepper step={step} setStep={setStep} />
            </form>
        </div>
    );
}

const Stepper = ({
    step,
    setStep,
}: {
    step: number;
    setStep: Dispatch<SetStateAction<null | any>>;
}) => {
    const [date, setDate] = useState<Date>(
        moment(new Date()).add('days', 1).toDate(),
    );
    const [time, setTime] = useState<Date | null>(null);
    const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const {currentLang, infoState} = useContext(InfoContext);
    const [loading, setLoading] = useState<boolean>(false);
    const timePeriods = useMemo<Date[]>(() => getTime(date), [date]);
    const [disabledTimes, setDisabledTimes] = useState<string[]>([]);
    const [disabledDates, setDisabledDates] = useState<Date[] | undefined>(
        undefined,
    );
    const {t} = useTranslation();

    const checkAndSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (
            !time ||
            !numberOfPeople ||
            nameError ||
            phoneError ||
            emailError ||
            email === '' ||
            name === '' ||
            phone === ''
        ) {
            return alert('Error here');
        }
        setLoading(true);
        const req = await sendReservation({
            body: {
                name: name,
                email: email,
                numOfPeople: numberOfPeople,
                phone: phone,
                reservation_datetime: time,
            },
        });
        if (req.status === 200) {
            setStep(5);
            setLoading(false);
        } else {
            setStep(6);
            setLoading(false);
        }
    };
    function validatePhoneNumber(input_str: string) {
        setPhone(input_str);
        const re =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(input_str)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    }
    function validateEmail(input_str: string) {
        setEmail(input_str);
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!re.test(input_str)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    function validateName(input_str: string) {
        setName(input_str);
        const re = /^[a-zA-Z][a-zA-Z ]*$/;
        if (!re.test(input_str) || input_str.length < 1) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }
    function checkIfFormDisabled() {
        if (emailError || phoneError || nameError) {
            return true;
        }
        return false;
    }
    function getTime(date: Date): Date[] {
        const fromArrString = infoState.bookable_from.split(':');
        const toArrString = infoState.bookable_to.split(':');
        const from = moment(date)
            .set('hours', fromArrString[0])
            .set('minutes', fromArrString[1])
            .toDate();
        const to = moment(date)
            .set('hours', toArrString[0])
            .set('minutes', toArrString[1])
            .toDate();
        const qty = (to.getHours() - from.getHours()) * 2 + 1;
        let arr: Date[] = [];
        const dateParam = moment(date).format('YYYY-MM-DD');
        let disabledTimes: string[] = [];
        axios
            .post(
                disabledTimesUrl,
                {},
                {
                    headers: {
                        Accept: 'application/json',
                    },
                    params: {
                        date: dateParam,
                    },
                },
            )
            .then((res) => {
                res.data.times.map((time: string) => {
                    disabledTimes.push(moment(time).toDate().toTimeString());
                });
                setDisabledTimes(disabledTimes);
            });
        for (let i = 0; i < qty; i++) {
            const s = moment(from)
                .add(30 * i, 'minutes')
                .toDate();
            arr.push(s);
        }
        return arr;
    }
    const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];
    function nextStep(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setStep((prevStep: number) => prevStep + 1);
    }
    function prevStep(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setStep((prevStep: number) => prevStep - 1);
    }
    const timeIsDisabled = (el: Date): boolean => {
        return disabledTimes.includes(el.toTimeString());
    };
    useEffect(() => {
        let dates: Date[] = [];
        axios.get(disabledDatesUrl).then((res) => {
            res.data.dates.map((r: string) => {
                return dates.push(new Date(r));
            });
        });
        setDisabledDates(dates);
    }, []);
    const getDisabledDays = () => {
        let days: number[] = [];
        for (let i = 0; i < 7; i++) {
            if(i < infoState.day_from || i > infoState.day_to){
                days.push(i)
            }
        }
        return days;
    };
    if (loading) {
        return <Loading />;
    }
    switch (step) {
        case 0:
            return (
                <div className="form-step">
                    <div className="inputArea">
                        <Datepicker
                            disabledDays={getDisabledDays()}
                            disabledDates={disabledDates}
                            lang={currentLang}
                            maxDate={40}
                            minDate={1}
                            value={date}
                            dispatch={setDate}
                        />
                    </div>
                    <div className="choose-step">
                        <button onClick={(e) => nextStep(e)}>
                            {t('booking.next')}
                        </button>
                    </div>
                </div>
            );
        case 1:
            if (!timePeriods) {
                return <Loading />;
            }
            return (
                <div className="form-step">
                    <div className="time-option-grid">
                        {timePeriods.map((option: Date, index: number) => {
                            return (
                                <button
                                    disabled={timeIsDisabled(option)}
                                    className={
                                        time === option
                                            ? 'time-option time-option-selected'
                                            : 'time-option'
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTime(option);
                                    }}
                                    key={index}>
                                    {moment(option).format('HH:mm')}
                                </button>
                            );
                        })}
                    </div>
                    <div className="choose-step">
                        <button
                            onClick={(e) => prevStep(e)}
                            className="prev-step">
                            {t('booking.back')}
                        </button>
                        <button
                            onClick={(e) => nextStep(e)}
                            disabled={time === null}
                            className="next-step">
                            {t('booking.next')}
                        </button>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="form-step">
                    <div className="time-option-grid">
                        {peopleOptions.map((op) => {
                            return (
                                <button
                                    key={op}
                                    className={
                                        numberOfPeople === op
                                            ? 'time-option-selected'
                                            : ''
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setNumberOfPeople(op);
                                    }}>
                                    {op}
                                </button>
                            );
                        })}
                    </div>
                    <div className="choose-step">
                        <button
                            onClick={(e) => prevStep(e)}
                            className="prev-step">
                            {t('booking.back')}
                        </button>
                        <button
                            onClick={(e) => nextStep(e)}
                            disabled={numberOfPeople === null}
                            className="next-step">
                            {t('booking.next')}
                        </button>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="form-step">
                    <div className="inputArea">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            aria-invalid={nameError}
                            aria-describedby="nameError"
                            onChange={(e) => validateName(e.target.value)}
                        />
                        <label htmlFor="name">{t('booking.name')}:</label>
                        {nameError ? (
                            <strong id="nameError">
                                {t('booking.nameError')}
                            </strong>
                        ) : null}
                    </div>

                    <div className="inputArea">
                        <input
                            type="text"
                            id="email"
                            aria-invalid={emailError}
                            value={email}
                            aria-describedby="emailError"
                            onChange={(e) => validateEmail(e.target.value)}
                        />
                        <label htmlFor="email">{t('booking.email')}:</label>
                        {emailError ? (
                            <strong id="emailError">
                                {t('booking.emailError')}
                            </strong>
                        ) : null}
                    </div>

                    <div className="inputArea">
                        <input
                            type="text"
                            id="phone"
                            aria-invalid={phoneError}
                            aria-describedby="phoneError"
                            value={phone}
                            onChange={(e) =>
                                validatePhoneNumber(e.target.value)
                            }
                        />
                        <label htmlFor="phone">{t('booking.phone')}:</label>
                        {phoneError ? (
                            <strong id="phoneError">
                                {t('booking.phoneError')}
                            </strong>
                        ) : null}
                    </div>
                    <div className="choose-step">
                        <button
                            onClick={(e) => prevStep(e)}
                            className="prev-step">
                            {t('booking.back')}
                        </button>
                        <button
                            disabled={checkIfFormDisabled()}
                            onClick={(e) => checkAndSubmit(e)}
                            className="next-step">
                            {t('booking.submit')}
                        </button>
                    </div>
                </div>
            );
        case 6:
            return (
                <div className="booking-success">
                    <h2>{t('error')}</h2>
                </div>
            );
        default:
            return (
                <div className="booking-success">
                    <h2>{t('booking.thanks')}</h2>
                    <p>{t('booking.goConfirm')}</p>
                </div>
            );
    }
};
