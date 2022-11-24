import axios from 'axios';
import {useState} from 'react';
import '../css/contact.css';
import {contactUrl} from '../env/constants';
export default function Contact() {
    function submitForm(ev: any) {
        ev.preventDefault();
        setButtonDisabled(true);
        const body = {
            subject: subject,
            email: email,
            name: name,
            text: message,
        };
        axios
            .post(contactUrl, body, {headers: {accept: 'application/json'}})
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
        setMessageSent(true);
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
        setButtonDisabled(false);
    }
    const [name, setName] = useState<string>();
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [subject, setSubject] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    return (
        <div className="contact-body">
            <div className="contact-form-body">
                <h1
                    style={{
                        color: '#ff9966',
                        fontFamily: "'poppins','sans-serif'",
                    }}>
                    Kontaktirajte nas
                </h1>
                <h5
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        paddingBottom: '10px',
                    }}>
                    Pobrinut ćemo se da vam odgovorimo u što kraćem roku.
                </h5>
                <div
                    className={
                        messageSent
                            ? 'form-success form-success-open'
                            : 'form-success'
                    }>
                    Poruka uspjesno poslana
                </div>
                <form
                    onSubmit={(ev) => {
                        submitForm(ev);
                    }}
                    className="contact-form">
                    <label htmlFor="name" className="contact-label">
                        Ime:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Vaše ime:"
                        className="contact-input"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="subject" className="contact-label">
                        Predmet:
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Predmet"
                        className="contact-input"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <label htmlFor="email" className="contact-label">
                        E-mail:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="contact-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="message" className="contact-label">
                        Poruka:
                    </label>
                    <textarea
                        className="contact-textarea"
                        name="message"
                        id="message"
                        placeholder="Vaša poruka ovdje"
                        cols={30}
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button
                        disabled={buttonDisabled}
                        type="submit"
                        className="contact-submit">
                        {buttonDisabled ? 'Sending...' : 'Pošalji'}
                    </button>
                </form>
            </div>
        </div>
    );
}
