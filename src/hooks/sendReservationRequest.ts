import axios from "axios"
import { reservationUrl } from "../env/constants"
interface ReservationBody{
    name: string;
    email:string;
    numOfPeople:number;
    phone:string;
    reservation_datetime: Date;
}
async function sendReservation({body} : {body:ReservationBody}){
    return axios.post(reservationUrl,{},{
        params: body,
        headers:{
            Accept: 'application/json'
        }
    })
}
export { sendReservation }