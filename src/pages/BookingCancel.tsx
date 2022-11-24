import '../css/booking.css';
import axios from 'axios';
import {useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../layouts/Loading';
import {cancelationUrl} from '../env/constants';
export default function BookingCancel() {
    const {uuid} = useParams();
    const [loading, setLoading] = useState(false);
    const [deleted, setDeleted] = useState(false)
    const cancel = () => {
        setLoading(true)
        axios
            .delete(cancelationUrl, {
                headers: {
                    Accept: 'application/json',
                },
                params: {
                    uuid: uuid,
                },
            })
            .then((res) => {
                if (res.status === 204) {
                    setLoading(false);
                    setDeleted(true)
                }
            }).catch(e => {
                setDeleted(true)
                setLoading(false)
            });
    }
    if (loading) {
        return <Loading />;
    }
    return (
        <div
            className="booking-form"
            style={{width: '100vw', height: '100vh', textAlign: 'center'}}>
            <h1
                style={{
                    margin: 'auto',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                {deleted ? 'Succesfully canceled' : 'Click on the button to cancel the reservation'}
                <div className='choose-step' style={{width: '100%', textAlign: 'center'}}>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </h1>
        </div>
    );
}
