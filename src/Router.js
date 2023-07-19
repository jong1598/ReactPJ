

import React, { lazy, Suspense } from 'react';
import './css/App.css';
import './css/PJ.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from './code/common/components/Loading';

function Router() {
    const Main = lazy(() => import('./code/Main/Main'))
    const Login = lazy(() => import('./code/Login/Login'))

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading isOpen={true} />}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
