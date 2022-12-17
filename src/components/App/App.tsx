import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from '../../pages/Landing';

const MoviesPage = React.lazy(() => import('../../pages/Movies'));
const ProfilePage = React.lazy(() => import('../../pages/ProfileEdit'));
const RegisterPage = React.lazy(() => import('../../pages/Register'));
const LoginPage = React.lazy(() => import('../../pages/Login'));

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="movies"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <MoviesPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="profile"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProfilePage />
                        </Suspense>
                    )}
                />
                <Route
                    path="signup"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <RegisterPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="signin"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <LoginPage />
                        </Suspense>
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;
