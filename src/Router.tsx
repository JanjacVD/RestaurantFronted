import {Routes, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import React from 'react';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
import Footer from './layouts/Footer';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BookingConfirm from './pages/BookingConfirm';
import BookingCancel from './pages/BookingCancel';
import Gallery from './pages/Gallery';
export default function Router() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path='/confirm/:uuid' element={<BookingConfirm />} />
                    <Route path='/cancel/:uuid' element={<BookingCancel />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
