import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from '../../pages/Landing';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
    auth, login, register, userData,
} from '../../utils/MainApi';
import { currentUserType } from '../../types/user';

const MoviesPage = React.lazy(() => import('../../pages/Movies'));
const ProfilePage = React.lazy(() => import('../../pages/ProfileEdit'));
const RegisterPage = React.lazy(() => import('../../pages/Register'));
const LoginPage = React.lazy(() => import('../../pages/Login'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFound'));
const SavedMoviesPage = React.lazy(() => import('../../pages/SavedMovies'));

function App() {
    const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleRegister = async (data: userData) => {
        try {
            const user = await register(data);
            setIsLoggedIn(true);
            setCurrentUser(user);
        } catch (e) {
            console.log(e);
        }
    };

    const handleLogin = async (data: Partial<userData>) => {
        try {
            const token = await login(data);
            const userData = await auth();
            setIsLoggedIn(true);
            localStorage.setItem('token', token);
            setCurrentUser(userData);
        } catch (e) {
            console.warn(e);
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="movies"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProtectedRoute Component={MoviesPage} isLoggedIn={isLoggedIn} />
                        </Suspense>
                    )}
                />
                <Route
                    path="profile"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProtectedRoute Component={ProfilePage} isLoggedIn={isLoggedIn} />
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
                <Route
                    path="saved-movies"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProtectedRoute Component={SavedMoviesPage} isLoggedIn={isLoggedIn} />
                        </Suspense>
                    )}
                />
                <Route
                    path="*"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <NotFoundPage />
                        </Suspense>
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;
