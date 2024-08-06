import React from 'react';
import NavBar from '../pages/navBar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <main style={{ height: 'calc(100% - 169px)' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
