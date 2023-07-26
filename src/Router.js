

import React, { lazy, Suspense } from 'react';
import './css/App.css';
import './css/PJ.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from './code/common/components/Loading';
import SimpleLoading from './code/Login/SimpleLoading';

function Router() {
    const Main = lazy(() => import('./code/Main/Main'))
    const Login = lazy(() => import('./code/Login/Login'))
    const Portfolio = lazy(() => import('./code/Portfolio/Portfolio'))
    const Project = lazy(() => import('./code/Project/Project'))
    const Study = lazy(() => import('./code/Study/Study'))
    const Intro = lazy(() => import('./code/Intro/Intro'))

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading isOpen={true} />}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/login/simple_loading' element={<SimpleLoading />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/study' element={<Study />} />
                    <Route path='/intro' element={<Intro />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
