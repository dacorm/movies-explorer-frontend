import React, {
    FC, Suspense, useEffect, useState,
} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Landing from '../../pages/Landing';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
    auth, login, register, userData,
} from '../../utils/MainApi';
import { currentUserType } from '../../types/user';
import CurrentUserContext from '../../contexts/currentUserContext';

const MoviesPage = React.lazy(() => import('../../pages/Movies'));
const ProfilePage = React.lazy(() => import('../../pages/ProfileEdit'));
const RegisterPage = React.lazy(() => import('../../pages/Register'));
const LoginPage = React.lazy(() => import('../../pages/Login'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFound'));
const SavedMoviesPage = React.lazy(() => import('../../pages/SavedMovies'));

function App() {
    const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (data: userData | Partial<userData>) => {
        try {
            const user = await register(data as userData);
            setIsLoggedIn(true);
            setCurrentUser(user);
        } catch (e) {
            console.log(e);
            setIsLoggedIn(false);
        }
    };

    const handleLogin = async (data: Partial<userData>) => {
        try {
            const { token } = await login(data);
            const userData = await auth(token);
            setIsLoggedIn(true);
            localStorage.setItem('token', token);
            setCurrentUser(userData);
        } catch (e) {
            console.warn(e);
            setIsLoggedIn(false);
        }
    };

    const checkToken = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const data = await auth(token);
                setIsLoggedIn(true);
                setCurrentUser(data);
            } catch (e) {
                console.warn(e);
                setIsLoggedIn(false);
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        console.log(isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
        checkToken();
    }, [isLoggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                                <ProtectedRoute Component={ProfilePage as unknown as FC<{}>} isLoggedIn={isLoggedIn} onLogout={logout} />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="signup"
                        element={(
                            <Suspense fallback={<div>Идёт загрузка...</div>}>
                                <RegisterPage onSubmit={handleRegister} isLoggedIn={isLoggedIn} />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="signin"
                        element={(
                            <Suspense fallback={<div>Идёт загрузка...</div>}>
                                <LoginPage onSubmit={handleLogin} isLoggedIn={isLoggedIn} />
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
        </CurrentUserContext.Provider>
    );
}

export default App;
