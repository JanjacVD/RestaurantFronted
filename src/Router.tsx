import {Routes, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import React from 'react';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
export default function Router() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/menu/" element={<Menu />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </main>
        </>
    );
}
