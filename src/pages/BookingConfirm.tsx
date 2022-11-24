import '../css/booking.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../layouts/Loading';
import { confirmationUrl } from '../env/constants';
export default function BookingConfirm() {
    const {uuid} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.post(confirmationUrl,{},{
            headers: {
                Accept: 'application/json'
            },
            params: {
                uuid: uuid
            }
        }).then(res => {
            console.log(res)
            if(res.status === 200){
                setLoading(false)
            }
        })
    },[])
    if (loading) {
        return <Loading />;
    }
    return (
        <div
            className="booking-form"
            style={{width: '100vw', height: '100vh', display: 'flex'}}>
            <h1
                style={{
                    margin: 'auto',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                Thank you for your reservation, see you soon
                <p style={{marginTop: '2rem', fontSize: '1.2rem'}}>
                    We sent you an email with details of your reservation as
                    well
                </p>
            </h1>
        </div>
    );
}
