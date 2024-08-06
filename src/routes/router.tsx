import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ShowDress from '../pages/ShowDress';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Adavnce from '../pages/Adavnce';
import Catalog from '../pages/Catalog';
import MyAccount from '../pages/MyAccount';
import LoginPage from '../pages/LoginPage';
import SignUp from '../pages/signUp';
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
import { PATHS } from './paths';
import { Navigate, createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter([
    {
        path: PATHS.home,
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: PATHS.about,
                element: <About />,
            },
            {
                path: PATHS.contact,
                element: <Contact />,
            },
            {
                path: PATHS.advance,
                element: <Adavnce />,
            },
            {
                path: PATHS.catalog,
                element: <Catalog />,
            },
            {
                path: PATHS.myAccount,
                element: (
                    <AuthGuard>
                        <MyAccount />
                    </AuthGuard>
                )
            },
            {
                path: `${PATHS.showDress}/:param`,
                element: <ShowDress />
            },
            {
                path: '*',
                element: <Navigate to={PATHS.home} />,
            }
        ]
    },
    {
        path: PATHS.login,
        element: <LoginPage />
    },
    {
        path: PATHS.signUp,
        element: <SignUp />
    },
    {
        path: '',
        element: <Navigate to={PATHS.home} />
    }
]);

